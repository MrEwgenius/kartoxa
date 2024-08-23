export const calculatePotate = (
  type: string,
  values: Record<string, number>
): number => {
  return values[type] || 0;
};


export const createScoreMap = (
  names: string[],
  scores: number[]
): Record<string, number> => {
  return names.reduce((acc, name, index) => {
      acc[name] = scores[index];
      return acc;
  }, {} as Record<string, number>);
};

export const calculateForAge = (age: number): number => {
  if (age >= 22 && age <= 25) return 100;
  if (age < 22) return Math.max(0, 100 - Math.abs(age - 23) * 10);
  return Math.max(0, 100 - (age - 25) * 2);
};

export const calculateForHeight = (height: number): number => {
  if (height >= 180 && height <= 190) return 100;
  if (height < 180) return Math.max(0, 100 - Math.abs(height - 185) * 5);
  return Math.max(0, 100 - Math.abs(height - 185) * 5);
};