export function formatDate(date: Date, format: string): string {
    const formatMapping: { [key: string]: () => string } = {
      'YYYY': () => date.getFullYear().toString(),
      'MM': () => (date.getMonth() + 1).toString().padStart(2, '0'),
      'DD': () => date.getDate().toString().padStart(2, '0'),
      'HH': () => date.getHours().toString().padStart(2, '0'),
      'mm': () => date.getMinutes().toString().padStart(2, '0'),
      'ss': () => date.getSeconds().toString().padStart(2, '0'),
    };
  
    return format.replace(/(YYYY|MM|DD|HH|mm|ss)/g, (match: string) => {
      return formatMapping[match] ? formatMapping[match]() : match;
    });
  }