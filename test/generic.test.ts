describe('generic', () => {

    class GenericData<T> {
        value: T;

        constructor(value: T) {
            this.value = value;
        }

        get(): T {
            return this.value;
        }

        set(value: T){
            this.value = value;
        }
    }

    it('should support multiple data type', async () => {

        const dataNumber = new GenericData<number>(123);
        // dataNumber.value = "eko"; // error
        // dataNumber.value = true; // error
        expect(dataNumber.value).toBe(123);

        const dataString = new GenericData<string>("Eko");
        // dataString.value = 123; // error
        // dataString.value = true; // error
        const upper = dataString.value.toUpperCase();
        expect(upper).toBe("EKO");

    });

    function create<T>(value: T): T {
        return value;
    }

    it('should support function generic', async () => {

        const result: string = create<string>("Eko");
        expect(result).toBe("Eko");

        const result2: number = create<number>(123);
        expect(result2).toBe(123);

    });

});
