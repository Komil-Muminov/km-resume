import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GridMeshProps {
	size?: number;
	divisions?: number;
	speed?: number;
}

const GridMesh: React.FC<GridMeshProps> = ({
	size = 50,
	divisions = 40,
	speed = 0.5,
}) => {
	const meshRef = useRef<THREE.Points>(null);
	const timeRef = useRef(0);
	const mouseRef = useRef({ x: 0, y: 0 });

	// Слушаем движение мыши
	React.useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
			mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	// Создаём геометрию сетки
	const geometry = useMemo(() => {
		const geo = new THREE.BufferGeometry();
		const positions: number[] = [];
		const originalPositions: number[] = [];

		for (let x = 0; x <= divisions; x++) {
			for (let z = 0; z <= divisions; z++) {
				const xPos = (x / divisions - 0.5) * size;
				const zPos = (z / divisions - 0.5) * size;
				const yPos = 0;

				positions.push(xPos, yPos, zPos);
				originalPositions.push(xPos, yPos, zPos);
			}
		}

		geo.setAttribute(
			"position",
			new THREE.BufferAttribute(new Float32Array(positions), 3),
		);
		geo.setAttribute(
			"originalPosition",
			new THREE.BufferAttribute(new Float32Array(originalPositions), 3),
		);

		return geo;
	}, [divisions, size]);

	useFrame((state) => {
		if (!meshRef.current) return;

		timeRef.current += 0.01 * speed;
		const positions = meshRef.current.geometry.attributes.position
			.array as Float32Array;
		const originalPositions = meshRef.current.geometry.attributes
			.originalPosition.array as Float32Array;

		for (let i = 0; i < positions.length; i += 3) {
			const x = originalPositions[i];
			const z = originalPositions[i + 2];

			// Волнистое движение на основе синуса
			const wave1 = Math.sin(x * 0.5 + timeRef.current) * 0.3;
			const wave2 = Math.sin(z * 0.5 + timeRef.current * 0.7) * 0.3;
			const distance = Math.sqrt(
				Math.pow(mouseRef.current.x - x / size, 2) +
					Math.pow(mouseRef.current.y - z / size, 2),
			);

			// Реакция на мышь
			const mouseInfluence = Math.max(0, 1 - distance) * 0.5;

			positions[i + 1] = (wave1 + wave2) * 0.5 + mouseInfluence * 0.8;
		}

		meshRef.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<points ref={meshRef} geometry={geometry}>
			<pointsMaterial
				size={0.15}
				color="#3b82f6"
				sizeAttenuation
				transparent
				opacity={0.6}
			/>
		</points>
	);
};

// Линии между точками
const GridLines: React.FC<{ divisions?: number; size?: number }> = ({
	divisions = 40,
	size = 50,
}) => {
	const lineRef = useRef<THREE.LineSegments>(null);
	const timeRef = useRef(0);

	useFrame(() => {
		if (!lineRef.current) return;
		timeRef.current += 0.01;
		lineRef.current.rotation.z = Math.sin(timeRef.current * 0.5) * 0.05;
	});

	const lineGeometry = useMemo(() => {
		const geo = new THREE.BufferGeometry();
		const positions: number[] = [];

		// Горизонтальные линии
		for (let z = 0; z <= divisions; z += 1) {
			const zPos = (z / divisions - 0.5) * size;
			positions.push(-size / 2, 0, zPos);
			positions.push(size / 2, 0, zPos);
		}

		// Вертикальные линии
		for (let x = 0; x <= divisions; x += 1) {
			const xPos = (x / divisions - 0.5) * size;
			positions.push(xPos, 0, -size / 2);
			positions.push(xPos, 0, size / 2);
		}

		geo.setAttribute(
			"position",
			new THREE.BufferAttribute(new Float32Array(positions), 3),
		);
		return geo;
	}, [divisions, size]);

	return (
		<lineSegments ref={lineRef} geometry={lineGeometry}>
			<lineBasicMaterial
				color="#1e40af"
				transparent
				opacity={0.15}
				linewidth={1}
			/>
		</lineSegments>
	);
};

export const ModernGridBackground: React.FC = () => {
	return (
		<div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
			<Canvas
				camera={{ position: [0, 15, 25], fov: 60 }}
				dpr={[1, 2]}
				style={{ background: "transparent" }}
			>
				<ambientLight intensity={0.4} color="#ffffff" />
				<pointLight position={[20, 20, 20]} intensity={0.5} color="#3b82f6" />

				<GridMesh size={50} divisions={40} speed={0.5} />
				<GridLines divisions={40} size={50} />
			</Canvas>
		</div>
	);
};
