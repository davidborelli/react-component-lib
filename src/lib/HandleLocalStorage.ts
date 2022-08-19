export default class HandleLocalStorageDictionary<T> {
  name: string;

  constructor(name = '') {
    this.name = name;
  }

  private getItemFromLocalStorage() {
    return localStorage.getItem(this.name) || '';
  }

  private setItemInLocalStorage(data: T): T {
    try {
      const stringData = JSON.stringify(data);
      localStorage.setItem(this.name, stringData);
      return data;
    } catch {
      throw Error(`Error setting item in ${this.name}`);
    }
  }

  clear() {
    localStorage.removeItem(this.name);
  }

  destroy() {
    localStorage.clear();
  }

  getItem(): T | null {
    try {
      const item = this.getItemFromLocalStorage();

      if (!item) {
        return null;
      }

      return JSON.parse(item);
    } catch (error) {
      throw Error(`Error getting item in ${this.name}`);
    }
  }

  setItem(content: T): T {
    return this.setItemInLocalStorage(content);
  }
}
