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

        setValue(value: T) {
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

    interface Employee {
        id: string;
        name: string;
    }

    interface Manager extends Employee {
        totalEmployee: number;
    }

    interface VP extends Manager {
        totalManager: number;
    }

    class EmployeeData<T extends Employee> {
        constructor(public employee: T) {
        }
    }

    it('should support constraint', async () => {
        const data1 = new EmployeeData<Employee>({
            id: "100",
            name: "Eko"
        });
        const data2 = new EmployeeData<Manager>({
            id: "100",
            name: "Eko",
            totalEmployee: 100
        });
        const data3 = new EmployeeData<VP>({
            id: "100",
            name: "Eko",
            totalEmployee: 100,
            totalManager: 10
        });

        // const data4 = new EmployeeData<string>("Eko"); // error
        // const data4 = new EmployeeData<number>(100); // error
    });

    it('should support array', async () => {
        const array = new Array<string>();
        array.push("Eko");
        array.push("Kurniawan");

        expect(array[0]).toBe("Eko");
        expect(array[1]).toBe("Kurniawan");
    });

    it('should support set', async () => {
        const set = new Set<string>();
        set.add("Eko");
        set.add("Kurniawan");
        set.add("Eko");

        expect(set.size).toBe(2);
        expect(set.has("Eko")).toBe(true);
        expect(set.has("Kurniawan")).toBe(true);
    });

    it('should support map', async () => {
        const map = new Map<string, number>();
        map.set("Eko", 100);
        map.set("Budi", 96);

        expect(map.get("Eko")).toBe(100);
        expect(map.get("Budi")).toBe(96);
    });

});
