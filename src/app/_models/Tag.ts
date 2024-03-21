export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly HTML = new Tag('HTML', 'orange');
    static readonly CSS = new Tag('CSS', 'green');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
    static readonly NODEJS = new Tag('Node.js', 'purple');
    static readonly EXPRESS = new Tag('Express', 'pink');
    static readonly MONGODB = new Tag('MongoDB', 'brown');
    static readonly JAVA = new Tag('Java', 'cyan');
    static readonly SPRING = new Tag('Spring', 'teal');
    static readonly MYSQL = new Tag('MySQL', 'indigo');
    static readonly POSTGRESQL = new Tag('PostgreSQL', 'violet');

    private constructor(private readonly key: string, public readonly color: string) { 

    }

    toString(): string {
        return this.key;
    }
}
