export function getDisplayedValue(props: {
  value: string;
  options: string[];
}): string {
  const selectedOption = props.options.find((option) => option === props.value);

  if (!selectedOption) {
    throw new Error(`value (${props.value}) not found in options list`);
  }

  return selectedOption;
}
