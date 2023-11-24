export function groupCondition(id: number) {
  let idString = String(id);

  if (idString === '800') return 'bg-clear';
  if (idString.startsWith('80')) return 'bg-cloud';

  if (
    idString.startsWith('2') ||
    idString.startsWith('3') ||
    idString.startsWith('7') ||
    idString.startsWith('5')
  ) return 'bg-rain';

  return 'bg-snow';
}