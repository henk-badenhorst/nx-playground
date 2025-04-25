
export async function preTasksExecution(options: unknown, context: unknown) {
  console.log('----------------------------------- ### Pre tasks execution started ### -----------------------------------');
  console.log('context', context);
  console.log('options', options);
  console.log('----------------------------------- ### Pre tasks execution ended ### -----------------------------------');
};

export async function postTasksExecution(options: unknown, context: unknown) {
  console.log('----------------------------------- ### Post tasks execution started ### -----------------------------------');
  console.log('context', context);
  console.log('options', options);
  console.log('----------------------------------- ### Post tasks execution ended ### -----------------------------------');
};
