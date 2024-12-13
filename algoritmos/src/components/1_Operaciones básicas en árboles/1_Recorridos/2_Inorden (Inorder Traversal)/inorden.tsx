import React, { useState } from "react";

// Definimos la estructura de un nodo del árbol binario
interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

// Función para realizar el recorrido Inorden
const inorderTraversal = (node: TreeNode | undefined, result: number[] = []): number[] => {
  if (!node) return result;
  inorderTraversal(node.left, result);
  result.push(node.value);
  inorderTraversal(node.right, result);
  return result;
};

// Componente principal
const InorderTraversalComponent: React.FC = () => {
  // Árbol de ejemplo
  const [tree] = useState<TreeNode>({
    value: 5,
    left: {
      value: 3,
      left: { value: 2 },
      right: { value: 4 },
    },
    right: {
      value: 8,
      left: { value: 6 },
      right: { value: 10 },
    },
  });

  const [result, setResult] = useState<number[]>([]);

  const handleTraversal = () => {
    const traversalResult = inorderTraversal(tree);
    setResult(traversalResult);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recorrido Inorden (Inorder Traversal)</h1>
      <button
        onClick={handleTraversal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Realizar Recorrido
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Resultado:</h2>
        {result.length > 0 ? (
          <ul className="list-disc pl-5">
            {result.map((value, index) => (
              <li key={index} className="text-lg">
                Nodo: {value}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Presiona el botón para ver el recorrido.</p>
        )}
      </div>
    </div>
  );
};

export default InorderTraversalComponent;