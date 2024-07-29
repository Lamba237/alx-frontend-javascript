export default function guardrail(mathFunction) {
  const queue = [];
  const result = mathFunction();

  try {
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
