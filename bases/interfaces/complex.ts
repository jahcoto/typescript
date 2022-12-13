(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getAddress(id: number): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'John',
    age: 30,
    address: {
      id: 1,
      zip: '12345',
      city: 'New York',
    },
    getAddress(id: number) {
      if (this.address.id === id) {
        return `${this.address.zip} ${this.address.city}`;
      } else {
        return 'Address no valida';
      }
    },
  };

  //console.log(client.getAddress(1));
})();
