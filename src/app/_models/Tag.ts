export class Tag {

    // Lenguajes
    static readonly TYPESCRIPT = new Tag('TypeScript', '#60a5fa');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#facc15');
    static readonly JAVA = new Tag('Java', '#fb923c');
    static readonly PYTHON = new Tag('Python', '#facc15');
    static readonly CPP = new Tag('C++', '#f472b6');
    static readonly C = new Tag('C', '#94a3b8');
    static readonly HTML = new Tag('HTML', '#fb923c');
    static readonly CSS = new Tag('CSS', '#38bdf8');
    static readonly SQL = new Tag('SQL', '#818cf8');

    // Frameworks y librerías
    static readonly ANGULAR = new Tag('Angular', '#f87171');
    static readonly SPRING_BOOT = new Tag('Spring Boot', '#4ade80');
    static readonly QUARKUS = new Tag('Quarkus', '#22d3ee');
    static readonly NODEJS = new Tag('Node.js', '#4ade80');
    static readonly EXPRESS = new Tag('Express', '#a3a3a3');
    static readonly SDL2 = new Tag('SDL2', '#38bdf8');
    static readonly QT = new Tag('Qt', '#4ade80');

    // Datos
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#818cf8');
    static readonly MYSQL = new Tag('MySQL', '#38bdf8');
    static readonly MONGODB = new Tag('MongoDB', '#4ade80');
    static readonly REDIS = new Tag('Redis', '#f87171');

    // Infraestructura y prácticas
    static readonly DOCKER = new Tag('Docker', '#38bdf8');
    static readonly AWS = new Tag('AWS', '#fb923c');
    static readonly CI_CD = new Tag('CI/CD', '#a78bfa');
    static readonly CMAKE = new Tag('CMake', '#94a3b8');
    static readonly LINUX = new Tag('Linux', '#facc15');
    static readonly MICROSERVICES = new Tag('Microservicios', '#22d3ee');
    static readonly REST_API = new Tag('REST API', '#4ade80');
    static readonly TESTING = new Tag('Testing', '#a78bfa');

    // IA
    static readonly IA = new Tag('IA', '#a78bfa');
    static readonly RAG = new Tag('RAG', '#a78bfa');
    static readonly FLOWISE = new Tag('Flowise', '#a78bfa');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString(): string {
        return this.key;
    }
}
