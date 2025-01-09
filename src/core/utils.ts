export function formatDate(date: Date): string {
    const day =
        date.getDate() + 1 < 10
            ? 0 + String(date.getDate() + 1)
            : date.getDate() + 1;
    const month =
        date.getMonth() + 1 < 10
            ? 0 + String(date.getMonth() + 1)
            : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
