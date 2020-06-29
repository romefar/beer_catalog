import io from 'socket.io-client';

const host = 'http://localhost:5000';

class SocketService {
  #socket;

  connect () {
    this.#socket = io.connect(host);
    return new Promise((resolve, reject) => {
      this.#socket.on('connect', () => resolve());
      this.#socket.on('connect_error', (error) => reject(new Error(error)));
    });
  }

  disconnect () {
    return new Promise((resolve) => {
      this.#socket.disconnect(() => {
        this.#socket = null;
        resolve();
      });
    });
  }

  emit (event, data) {
    return new Promise((resolve, reject) => {
      if (!this.#socket) return reject(new Error('No socket connection.'));

      return this.#socket.emit(event, data, (response) => {
        if (response.error) {
          return reject(new Error(response.error));
        }

        return resolve();
      });
    });
  }

  on (event, fun) {
    return new Promise((resolve, reject) => {
      if (!this.#socket) return reject(new Error('No socket connection.'));

      this.#socket.on(event, fun, (response) => {
        if (response.error) {
          return reject(new Error(response.error));
        }
      });
      resolve();
    });
  }
}

export default new SocketService();
