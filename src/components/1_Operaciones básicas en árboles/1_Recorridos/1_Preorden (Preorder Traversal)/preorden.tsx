import { useState } from 'react';


export default function Preorden() {
    // Tipo de nodo del árbol
        interface TreeNode {
            value: string;
            left?: TreeNode;
            right?: TreeNode;
        }
        
        // Función para el recorrido en preorden
        const preOrderTraversal = (node: TreeNode | undefined, result: string[] = []): string[] => {
            if (node) {
            result.push(node.value); // Procesar el nodo raíz
            preOrderTraversal(node.left, result); // Subárbol izquierdo
            preOrderTraversal(node.right, result); // Subárbol derecho
            }
            return result;
        };
        
        // Estructura del árbol binario
        const tree: TreeNode = {
            value: "A",
            left: {
            value: "B",
            left: { value: "D" },
            right: { value: "E" },
            },
            right: {
            value: "C",
            left: { value: "F" },
            right: { value: "G" },
            },
        };
        const [result, setResult] = useState<string[]>([]);

        const handleTraversal = () => {
            const traversalResult = preOrderTraversal(tree);
            setResult(traversalResult);
        };

    return (
      <>
        <div className="flex flex-col items-center p-4 space-y-4">
        <h1 className="text-2xl font-bold">Recorrido Preorden en Árbol Binario</h1>
        <button
            onClick={handleTraversal}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
            Mostrar Recorrido Preorden
        </button>
        <div className="w-full max-w-md p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-semibold">Resultado del Recorrido:</h2>
            <p className="mt-2 text-gray-800">{result.join(" → ") || "Presiona el botón para ver el recorrido."}</p>
        </div>
        </div>
      </>
    )
  }