export default interface FileHandler {
  downloadFile(fileName: string): Promise<void>;
}
