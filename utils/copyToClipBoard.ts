import { isBrowser } from './booleans';

function copyMessage(message: string) {
    if (!isBrowser) return;
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(message);
}
export default copyMessage;
