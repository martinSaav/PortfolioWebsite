/**
 * Tecnologías que se muestran como chips en proyectos y experiencia.
 * Se usan como instancias únicas para poder compararlas por identidad en los
 * filtros del portfolio.
 */
export class Tag {

    // Lenguajes
    static readonly TYPESCRIPT = new Tag('TypeScript');
    static readonly JAVASCRIPT = new Tag('JavaScript');
    static readonly JAVA = new Tag('Java');
    static readonly PYTHON = new Tag('Python');
    static readonly CPP = new Tag('C++');
    static readonly C = new Tag('C');
    static readonly RUST = new Tag('Rust');
    static readonly HTML = new Tag('HTML');
    static readonly CSS = new Tag('CSS');
    static readonly SQL = new Tag('SQL');

    // Frameworks y librerías
    static readonly ANGULAR = new Tag('Angular');
    static readonly SPRING_BOOT = new Tag('Spring Boot');
    static readonly QUARKUS = new Tag('Quarkus');
    static readonly LANGCHAIN4J = new Tag('LangChain4j');
    static readonly NODEJS = new Tag('Node.js');
    static readonly EXPRESS = new Tag('Express');
    static readonly SDL2 = new Tag('SDL2');
    static readonly QT = new Tag('Qt');

    // Datos
    static readonly POSTGRESQL = new Tag('PostgreSQL');
    static readonly MYSQL = new Tag('MySQL');
    static readonly MONGODB = new Tag('MongoDB');
    static readonly REDIS = new Tag('Redis');

    // Infraestructura y prácticas
    static readonly DOCKER = new Tag('Docker');
    static readonly AWS = new Tag('AWS');
    static readonly KEYCLOAK = new Tag('Keycloak');
    static readonly CI_CD = new Tag('CI/CD');
    static readonly CMAKE = new Tag('CMake');
    static readonly LINUX = new Tag('Linux');
    static readonly MICROSERVICES = new Tag('Microservicios');
    static readonly REST_API = new Tag('REST API');
    static readonly TESTING = new Tag('Testing');

    // IA
    static readonly IA = new Tag('IA');
    static readonly RAG = new Tag('RAG');
    static readonly MCP = new Tag('MCP');
    static readonly FLOWISE = new Tag('Flowise');

    private constructor(private readonly key: string) {
    }

    toString(): string {
        return this.key;
    }
}
