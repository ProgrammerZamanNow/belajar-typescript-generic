describe('generic', () => {

    class GenericData<T> {
        value: T;

        constructor(value: T) {
            this.value = value;
        }

        get(): T {
            return this.value;
        }

        set(value: T) {
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

    class Entry<K, V> {
        constructor(public key: K, public value: V) {
        }
    }

    class Triple<K, V, T> {
        constructor(public first: K, public second: V, public third: T) {
        }
    }

    it('should support multiple generic type', async () => {
        const entry = new Entry<number, string>(1, "Hello");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("Hello");

        const triple = new Triple<number, string, boolean>(1, "Hello", true);
        expect(triple.first).toBe(1);
        expect(triple.second).toBe("Hello");
        expect(triple.third).toBe(true);
    });

    it('should support optional generic type', async () => {

        const entry = new Entry(1, "Hello");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("Hello");

    });

    class SimpleGeneric<T = string> {
        private value?: T;

        setValue(value: T){
            this.value = value;
        }

        getValue(): T | undefined {
            return this.value;
        }
    }

    it('should create simple generic', async () => {
        const simple = new SimpleGeneric();
        simple.setValue("Eko");
        // simple.setValue(100);
        // simple.setValue(true);

        expect(simple.getValue()!.toUpperCase()).toBe("Eko");
    });

});
