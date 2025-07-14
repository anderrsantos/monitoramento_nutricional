
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model Meta
 * 
 */
export type Meta = $Result.DefaultSelection<Prisma.$MetaPayload>
/**
 * Model ConsumoAgua
 * 
 */
export type ConsumoAgua = $Result.DefaultSelection<Prisma.$ConsumoAguaPayload>
/**
 * Model Refeicao
 * 
 */
export type Refeicao = $Result.DefaultSelection<Prisma.$RefeicaoPayload>
/**
 * Model AlimentoRefeicao
 * 
 */
export type AlimentoRefeicao = $Result.DefaultSelection<Prisma.$AlimentoRefeicaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta`: Exposes CRUD operations for the **Meta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.meta.findMany()
    * ```
    */
  get meta(): Prisma.MetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consumoAgua`: Exposes CRUD operations for the **ConsumoAgua** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsumoAguas
    * const consumoAguas = await prisma.consumoAgua.findMany()
    * ```
    */
  get consumoAgua(): Prisma.ConsumoAguaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refeicao`: Exposes CRUD operations for the **Refeicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refeicaos
    * const refeicaos = await prisma.refeicao.findMany()
    * ```
    */
  get refeicao(): Prisma.RefeicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alimentoRefeicao`: Exposes CRUD operations for the **AlimentoRefeicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlimentoRefeicaos
    * const alimentoRefeicaos = await prisma.alimentoRefeicao.findMany()
    * ```
    */
  get alimentoRefeicao(): Prisma.AlimentoRefeicaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Perfil: 'Perfil',
    Meta: 'Meta',
    ConsumoAgua: 'ConsumoAgua',
    Refeicao: 'Refeicao',
    AlimentoRefeicao: 'AlimentoRefeicao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "perfil" | "meta" | "consumoAgua" | "refeicao" | "alimentoRefeicao"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PerfilFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PerfilAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      Meta: {
        payload: Prisma.$MetaPayload<ExtArgs>
        fields: Prisma.MetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findFirst: {
            args: Prisma.MetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findMany: {
            args: Prisma.MetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          create: {
            args: Prisma.MetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          createMany: {
            args: Prisma.MetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          update: {
            args: Prisma.MetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          aggregate: {
            args: Prisma.MetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta>
          }
          groupBy: {
            args: Prisma.MetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MetaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MetaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MetaCountArgs<ExtArgs>
            result: $Utils.Optional<MetaCountAggregateOutputType> | number
          }
        }
      }
      ConsumoAgua: {
        payload: Prisma.$ConsumoAguaPayload<ExtArgs>
        fields: Prisma.ConsumoAguaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsumoAguaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsumoAguaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload>
          }
          findFirst: {
            args: Prisma.ConsumoAguaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsumoAguaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload>
          }
          findMany: {
            args: Prisma.ConsumoAguaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload>[]
          }
          create: {
            args: Prisma.ConsumoAguaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload>
          }
          createMany: {
            args: Prisma.ConsumoAguaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConsumoAguaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload>
          }
          update: {
            args: Prisma.ConsumoAguaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload>
          }
          deleteMany: {
            args: Prisma.ConsumoAguaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsumoAguaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsumoAguaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumoAguaPayload>
          }
          aggregate: {
            args: Prisma.ConsumoAguaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsumoAgua>
          }
          groupBy: {
            args: Prisma.ConsumoAguaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsumoAguaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConsumoAguaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConsumoAguaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConsumoAguaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsumoAguaCountAggregateOutputType> | number
          }
        }
      }
      Refeicao: {
        payload: Prisma.$RefeicaoPayload<ExtArgs>
        fields: Prisma.RefeicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefeicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefeicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload>
          }
          findFirst: {
            args: Prisma.RefeicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefeicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload>
          }
          findMany: {
            args: Prisma.RefeicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload>[]
          }
          create: {
            args: Prisma.RefeicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload>
          }
          createMany: {
            args: Prisma.RefeicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefeicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload>
          }
          update: {
            args: Prisma.RefeicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload>
          }
          deleteMany: {
            args: Prisma.RefeicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefeicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefeicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefeicaoPayload>
          }
          aggregate: {
            args: Prisma.RefeicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefeicao>
          }
          groupBy: {
            args: Prisma.RefeicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefeicaoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RefeicaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RefeicaoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RefeicaoCountArgs<ExtArgs>
            result: $Utils.Optional<RefeicaoCountAggregateOutputType> | number
          }
        }
      }
      AlimentoRefeicao: {
        payload: Prisma.$AlimentoRefeicaoPayload<ExtArgs>
        fields: Prisma.AlimentoRefeicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlimentoRefeicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlimentoRefeicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload>
          }
          findFirst: {
            args: Prisma.AlimentoRefeicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlimentoRefeicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload>
          }
          findMany: {
            args: Prisma.AlimentoRefeicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload>[]
          }
          create: {
            args: Prisma.AlimentoRefeicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload>
          }
          createMany: {
            args: Prisma.AlimentoRefeicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlimentoRefeicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload>
          }
          update: {
            args: Prisma.AlimentoRefeicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload>
          }
          deleteMany: {
            args: Prisma.AlimentoRefeicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlimentoRefeicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlimentoRefeicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlimentoRefeicaoPayload>
          }
          aggregate: {
            args: Prisma.AlimentoRefeicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlimentoRefeicao>
          }
          groupBy: {
            args: Prisma.AlimentoRefeicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlimentoRefeicaoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlimentoRefeicaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlimentoRefeicaoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AlimentoRefeicaoCountArgs<ExtArgs>
            result: $Utils.Optional<AlimentoRefeicaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    perfil?: PerfilOmit
    meta?: MetaOmit
    consumoAgua?: ConsumoAguaOmit
    refeicao?: RefeicaoOmit
    alimentoRefeicao?: AlimentoRefeicaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    consumoAgua: number
    refeicoes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumoAgua?: boolean | UserCountOutputTypeCountConsumoAguaArgs
    refeicoes?: boolean | UserCountOutputTypeCountRefeicoesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsumoAguaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumoAguaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefeicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefeicaoWhereInput
  }


  /**
   * Count Type RefeicaoCountOutputType
   */

  export type RefeicaoCountOutputType = {
    alimentos: number
  }

  export type RefeicaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alimentos?: boolean | RefeicaoCountOutputTypeCountAlimentosArgs
  }

  // Custom InputTypes
  /**
   * RefeicaoCountOutputType without action
   */
  export type RefeicaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefeicaoCountOutputType
     */
    select?: RefeicaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RefeicaoCountOutputType without action
   */
  export type RefeicaoCountOutputTypeCountAlimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentoRefeicaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    perfil?: boolean | User$perfilArgs<ExtArgs>
    meta?: boolean | User$metaArgs<ExtArgs>
    consumoAgua?: boolean | User$consumoAguaArgs<ExtArgs>
    refeicoes?: boolean | User$refeicoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | User$perfilArgs<ExtArgs>
    meta?: boolean | User$metaArgs<ExtArgs>
    consumoAgua?: boolean | User$consumoAguaArgs<ExtArgs>
    refeicoes?: boolean | User$refeicoesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      perfil: Prisma.$PerfilPayload<ExtArgs> | null
      meta: Prisma.$MetaPayload<ExtArgs> | null
      consumoAgua: Prisma.$ConsumoAguaPayload<ExtArgs>[]
      refeicoes: Prisma.$RefeicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends User$perfilArgs<ExtArgs> = {}>(args?: Subset<T, User$perfilArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    meta<T extends User$metaArgs<ExtArgs> = {}>(args?: Subset<T, User$metaArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    consumoAgua<T extends User$consumoAguaArgs<ExtArgs> = {}>(args?: Subset<T, User$consumoAguaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refeicoes<T extends User$refeicoesArgs<ExtArgs> = {}>(args?: Subset<T, User$refeicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.perfil
   */
  export type User$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    where?: PerfilWhereInput
  }

  /**
   * User.meta
   */
  export type User$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    where?: MetaWhereInput
  }

  /**
   * User.consumoAgua
   */
  export type User$consumoAguaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    where?: ConsumoAguaWhereInput
    orderBy?: ConsumoAguaOrderByWithRelationInput | ConsumoAguaOrderByWithRelationInput[]
    cursor?: ConsumoAguaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsumoAguaScalarFieldEnum | ConsumoAguaScalarFieldEnum[]
  }

  /**
   * User.refeicoes
   */
  export type User$refeicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    where?: RefeicaoWhereInput
    orderBy?: RefeicaoOrderByWithRelationInput | RefeicaoOrderByWithRelationInput[]
    cursor?: RefeicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefeicaoScalarFieldEnum | RefeicaoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    peso: number | null
    altura: number | null
  }

  export type PerfilSumAggregateOutputType = {
    peso: number | null
    altura: number | null
  }

  export type PerfilMinAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    dataNascimento: Date | null
    peso: number | null
    altura: number | null
    sexo: string | null
    objetivo: string | null
    nivelAtividade: string | null
    usuarioId: string | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    sobrenome: string | null
    dataNascimento: Date | null
    peso: number | null
    altura: number | null
    sexo: string | null
    objetivo: string | null
    nivelAtividade: string | null
    usuarioId: string | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    nome: number
    sobrenome: number
    dataNascimento: number
    peso: number
    altura: number
    sexo: number
    objetivo: number
    nivelAtividade: number
    usuarioId: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    peso?: true
    altura?: true
  }

  export type PerfilSumAggregateInputType = {
    peso?: true
    altura?: true
  }

  export type PerfilMinAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    dataNascimento?: true
    peso?: true
    altura?: true
    sexo?: true
    objetivo?: true
    nivelAtividade?: true
    usuarioId?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    dataNascimento?: true
    peso?: true
    altura?: true
    sexo?: true
    objetivo?: true
    nivelAtividade?: true
    usuarioId?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    nome?: true
    sobrenome?: true
    dataNascimento?: true
    peso?: true
    altura?: true
    sexo?: true
    objetivo?: true
    nivelAtividade?: true
    usuarioId?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: string
    nome: string
    sobrenome: string
    dataNascimento: Date
    peso: number
    altura: number
    sexo: string
    objetivo: string
    nivelAtividade: string
    usuarioId: string
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    dataNascimento?: boolean
    peso?: boolean
    altura?: boolean
    sexo?: boolean
    objetivo?: boolean
    nivelAtividade?: boolean
    usuarioId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>



  export type PerfilSelectScalar = {
    id?: boolean
    nome?: boolean
    sobrenome?: boolean
    dataNascimento?: boolean
    peso?: boolean
    altura?: boolean
    sexo?: boolean
    objetivo?: boolean
    nivelAtividade?: boolean
    usuarioId?: boolean
  }

  export type PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "sobrenome" | "dataNascimento" | "peso" | "altura" | "sexo" | "objetivo" | "nivelAtividade" | "usuarioId", ExtArgs["result"]["perfil"]>
  export type PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      sobrenome: string
      dataNascimento: Date
      peso: number
      altura: number
      sexo: string
      objetivo: string
      nivelAtividade: string
      usuarioId: string
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilFindUniqueArgs>(args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilFindFirstArgs>(args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilFindManyArgs>(args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends PerfilCreateArgs>(args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilCreateManyArgs>(args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends PerfilDeleteArgs>(args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilUpdateArgs>(args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilDeleteManyArgs>(args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilUpdateManyArgs>(args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends PerfilUpsertArgs>(args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * @param {PerfilFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const perfil = await prisma.perfil.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PerfilFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Perfil.
     * @param {PerfilAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const perfil = await prisma.perfil.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PerfilAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perfil model
   */
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'String'>
    readonly nome: FieldRef<"Perfil", 'String'>
    readonly sobrenome: FieldRef<"Perfil", 'String'>
    readonly dataNascimento: FieldRef<"Perfil", 'DateTime'>
    readonly peso: FieldRef<"Perfil", 'Float'>
    readonly altura: FieldRef<"Perfil", 'Float'>
    readonly sexo: FieldRef<"Perfil", 'String'>
    readonly objetivo: FieldRef<"Perfil", 'String'>
    readonly nivelAtividade: FieldRef<"Perfil", 'String'>
    readonly usuarioId: FieldRef<"Perfil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
  }

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
  }

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to delete.
     */
    limit?: number
  }

  /**
   * Perfil findRaw
   */
  export type PerfilFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Perfil aggregateRaw
   */
  export type PerfilAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
  }


  /**
   * Model Meta
   */

  export type AggregateMeta = {
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  export type MetaAvgAggregateOutputType = {
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    agua: number | null
    gorduras: number | null
  }

  export type MetaSumAggregateOutputType = {
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    agua: number | null
    gorduras: number | null
  }

  export type MetaMinAggregateOutputType = {
    id: string | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    agua: number | null
    gorduras: number | null
    dataCriacao: Date | null
    usuarioId: string | null
  }

  export type MetaMaxAggregateOutputType = {
    id: string | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    agua: number | null
    gorduras: number | null
    dataCriacao: Date | null
    usuarioId: string | null
  }

  export type MetaCountAggregateOutputType = {
    id: number
    calorias: number
    proteinas: number
    carboidratos: number
    agua: number
    gorduras: number
    dataCriacao: number
    usuarioId: number
    _all: number
  }


  export type MetaAvgAggregateInputType = {
    calorias?: true
    proteinas?: true
    carboidratos?: true
    agua?: true
    gorduras?: true
  }

  export type MetaSumAggregateInputType = {
    calorias?: true
    proteinas?: true
    carboidratos?: true
    agua?: true
    gorduras?: true
  }

  export type MetaMinAggregateInputType = {
    id?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    agua?: true
    gorduras?: true
    dataCriacao?: true
    usuarioId?: true
  }

  export type MetaMaxAggregateInputType = {
    id?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    agua?: true
    gorduras?: true
    dataCriacao?: true
    usuarioId?: true
  }

  export type MetaCountAggregateInputType = {
    id?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    agua?: true
    gorduras?: true
    dataCriacao?: true
    usuarioId?: true
    _all?: true
  }

  export type MetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta to aggregate.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metas
    **/
    _count?: true | MetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaMaxAggregateInputType
  }

  export type GetMetaAggregateType<T extends MetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta[P]>
      : GetScalarType<T[P], AggregateMeta[P]>
  }




  export type MetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithAggregationInput | MetaOrderByWithAggregationInput[]
    by: MetaScalarFieldEnum[] | MetaScalarFieldEnum
    having?: MetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaCountAggregateInputType | true
    _avg?: MetaAvgAggregateInputType
    _sum?: MetaSumAggregateInputType
    _min?: MetaMinAggregateInputType
    _max?: MetaMaxAggregateInputType
  }

  export type MetaGroupByOutputType = {
    id: string
    calorias: number
    proteinas: number
    carboidratos: number
    agua: number
    gorduras: number
    dataCriacao: Date
    usuarioId: string
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  type GetMetaGroupByPayload<T extends MetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaGroupByOutputType[P]>
            : GetScalarType<T[P], MetaGroupByOutputType[P]>
        }
      >
    >


  export type MetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calorias?: boolean
    proteinas?: boolean
    carboidratos?: boolean
    agua?: boolean
    gorduras?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>



  export type MetaSelectScalar = {
    id?: boolean
    calorias?: boolean
    proteinas?: boolean
    carboidratos?: boolean
    agua?: boolean
    gorduras?: boolean
    dataCriacao?: boolean
    usuarioId?: boolean
  }

  export type MetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "calorias" | "proteinas" | "carboidratos" | "agua" | "gorduras" | "dataCriacao" | "usuarioId", ExtArgs["result"]["meta"]>
  export type MetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      calorias: number
      proteinas: number
      carboidratos: number
      agua: number
      gorduras: number
      dataCriacao: Date
      usuarioId: string
    }, ExtArgs["result"]["meta"]>
    composites: {}
  }

  type MetaGetPayload<S extends boolean | null | undefined | MetaDefaultArgs> = $Result.GetResult<Prisma.$MetaPayload, S>

  type MetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaCountAggregateInputType | true
    }

  export interface MetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta'], meta: { name: 'Meta' } }
    /**
     * Find zero or one Meta that matches the filter.
     * @param {MetaFindUniqueArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaFindUniqueArgs>(args: SelectSubset<T, MetaFindUniqueArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaFindUniqueOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaFindFirstArgs>(args?: SelectSubset<T, MetaFindFirstArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.meta.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.meta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaWithIdOnly = await prisma.meta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaFindManyArgs>(args?: SelectSubset<T, MetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta.
     * @param {MetaCreateArgs} args - Arguments to create a Meta.
     * @example
     * // Create one Meta
     * const Meta = await prisma.meta.create({
     *   data: {
     *     // ... data to create a Meta
     *   }
     * })
     * 
     */
    create<T extends MetaCreateArgs>(args: SelectSubset<T, MetaCreateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {MetaCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaCreateManyArgs>(args?: SelectSubset<T, MetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meta.
     * @param {MetaDeleteArgs} args - Arguments to delete one Meta.
     * @example
     * // Delete one Meta
     * const Meta = await prisma.meta.delete({
     *   where: {
     *     // ... filter to delete one Meta
     *   }
     * })
     * 
     */
    delete<T extends MetaDeleteArgs>(args: SelectSubset<T, MetaDeleteArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta.
     * @param {MetaUpdateArgs} args - Arguments to update one Meta.
     * @example
     * // Update one Meta
     * const meta = await prisma.meta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaUpdateArgs>(args: SelectSubset<T, MetaUpdateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {MetaDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.meta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeleteManyArgs>(args?: SelectSubset<T, MetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaUpdateManyArgs>(args: SelectSubset<T, MetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meta.
     * @param {MetaUpsertArgs} args - Arguments to update or create a Meta.
     * @example
     * // Update or create a Meta
     * const meta = await prisma.meta.upsert({
     *   create: {
     *     // ... data to create a Meta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta we want to update
     *   }
     * })
     */
    upsert<T extends MetaUpsertArgs>(args: SelectSubset<T, MetaUpsertArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * @param {MetaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const meta = await prisma.meta.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MetaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Meta.
     * @param {MetaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const meta = await prisma.meta.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MetaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.meta.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends MetaCountArgs>(
      args?: Subset<T, MetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaAggregateArgs>(args: Subset<T, MetaAggregateArgs>): Prisma.PrismaPromise<GetMetaAggregateType<T>>

    /**
     * Group by Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaGroupByArgs['orderBy'] }
        : { orderBy?: MetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta model
   */
  readonly fields: MetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meta model
   */
  interface MetaFieldRefs {
    readonly id: FieldRef<"Meta", 'String'>
    readonly calorias: FieldRef<"Meta", 'Float'>
    readonly proteinas: FieldRef<"Meta", 'Float'>
    readonly carboidratos: FieldRef<"Meta", 'Float'>
    readonly agua: FieldRef<"Meta", 'Float'>
    readonly gorduras: FieldRef<"Meta", 'Float'>
    readonly dataCriacao: FieldRef<"Meta", 'DateTime'>
    readonly usuarioId: FieldRef<"Meta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meta findUnique
   */
  export type MetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findUniqueOrThrow
   */
  export type MetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findFirst
   */
  export type MetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findFirstOrThrow
   */
  export type MetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findMany
   */
  export type MetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Metas to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta create
   */
  export type MetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Meta.
     */
    data: XOR<MetaCreateInput, MetaUncheckedCreateInput>
  }

  /**
   * Meta createMany
   */
  export type MetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
  }

  /**
   * Meta update
   */
  export type MetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Meta.
     */
    data: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
    /**
     * Choose, which Meta to update.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta updateMany
   */
  export type MetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta upsert
   */
  export type MetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Meta to update in case it exists.
     */
    where: MetaWhereUniqueInput
    /**
     * In case the Meta found by the `where` argument doesn't exist, create a new Meta with this data.
     */
    create: XOR<MetaCreateInput, MetaUncheckedCreateInput>
    /**
     * In case the Meta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
  }

  /**
   * Meta delete
   */
  export type MetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter which Meta to delete.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta deleteMany
   */
  export type MetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metas to delete
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to delete.
     */
    limit?: number
  }

  /**
   * Meta findRaw
   */
  export type MetaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Meta aggregateRaw
   */
  export type MetaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Meta without action
   */
  export type MetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
  }


  /**
   * Model ConsumoAgua
   */

  export type AggregateConsumoAgua = {
    _count: ConsumoAguaCountAggregateOutputType | null
    _avg: ConsumoAguaAvgAggregateOutputType | null
    _sum: ConsumoAguaSumAggregateOutputType | null
    _min: ConsumoAguaMinAggregateOutputType | null
    _max: ConsumoAguaMaxAggregateOutputType | null
  }

  export type ConsumoAguaAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type ConsumoAguaSumAggregateOutputType = {
    quantidade: number | null
  }

  export type ConsumoAguaMinAggregateOutputType = {
    id: string | null
    quantidade: number | null
    data: Date | null
    usuarioId: string | null
  }

  export type ConsumoAguaMaxAggregateOutputType = {
    id: string | null
    quantidade: number | null
    data: Date | null
    usuarioId: string | null
  }

  export type ConsumoAguaCountAggregateOutputType = {
    id: number
    quantidade: number
    data: number
    usuarioId: number
    _all: number
  }


  export type ConsumoAguaAvgAggregateInputType = {
    quantidade?: true
  }

  export type ConsumoAguaSumAggregateInputType = {
    quantidade?: true
  }

  export type ConsumoAguaMinAggregateInputType = {
    id?: true
    quantidade?: true
    data?: true
    usuarioId?: true
  }

  export type ConsumoAguaMaxAggregateInputType = {
    id?: true
    quantidade?: true
    data?: true
    usuarioId?: true
  }

  export type ConsumoAguaCountAggregateInputType = {
    id?: true
    quantidade?: true
    data?: true
    usuarioId?: true
    _all?: true
  }

  export type ConsumoAguaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsumoAgua to aggregate.
     */
    where?: ConsumoAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsumoAguas to fetch.
     */
    orderBy?: ConsumoAguaOrderByWithRelationInput | ConsumoAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsumoAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsumoAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsumoAguas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsumoAguas
    **/
    _count?: true | ConsumoAguaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsumoAguaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsumoAguaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsumoAguaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsumoAguaMaxAggregateInputType
  }

  export type GetConsumoAguaAggregateType<T extends ConsumoAguaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsumoAgua]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsumoAgua[P]>
      : GetScalarType<T[P], AggregateConsumoAgua[P]>
  }




  export type ConsumoAguaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumoAguaWhereInput
    orderBy?: ConsumoAguaOrderByWithAggregationInput | ConsumoAguaOrderByWithAggregationInput[]
    by: ConsumoAguaScalarFieldEnum[] | ConsumoAguaScalarFieldEnum
    having?: ConsumoAguaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsumoAguaCountAggregateInputType | true
    _avg?: ConsumoAguaAvgAggregateInputType
    _sum?: ConsumoAguaSumAggregateInputType
    _min?: ConsumoAguaMinAggregateInputType
    _max?: ConsumoAguaMaxAggregateInputType
  }

  export type ConsumoAguaGroupByOutputType = {
    id: string
    quantidade: number
    data: Date
    usuarioId: string
    _count: ConsumoAguaCountAggregateOutputType | null
    _avg: ConsumoAguaAvgAggregateOutputType | null
    _sum: ConsumoAguaSumAggregateOutputType | null
    _min: ConsumoAguaMinAggregateOutputType | null
    _max: ConsumoAguaMaxAggregateOutputType | null
  }

  type GetConsumoAguaGroupByPayload<T extends ConsumoAguaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsumoAguaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsumoAguaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsumoAguaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsumoAguaGroupByOutputType[P]>
        }
      >
    >


  export type ConsumoAguaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    data?: boolean
    usuarioId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumoAgua"]>



  export type ConsumoAguaSelectScalar = {
    id?: boolean
    quantidade?: boolean
    data?: boolean
    usuarioId?: boolean
  }

  export type ConsumoAguaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "data" | "usuarioId", ExtArgs["result"]["consumoAgua"]>
  export type ConsumoAguaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsumoAguaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsumoAgua"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantidade: number
      data: Date
      usuarioId: string
    }, ExtArgs["result"]["consumoAgua"]>
    composites: {}
  }

  type ConsumoAguaGetPayload<S extends boolean | null | undefined | ConsumoAguaDefaultArgs> = $Result.GetResult<Prisma.$ConsumoAguaPayload, S>

  type ConsumoAguaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsumoAguaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsumoAguaCountAggregateInputType | true
    }

  export interface ConsumoAguaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsumoAgua'], meta: { name: 'ConsumoAgua' } }
    /**
     * Find zero or one ConsumoAgua that matches the filter.
     * @param {ConsumoAguaFindUniqueArgs} args - Arguments to find a ConsumoAgua
     * @example
     * // Get one ConsumoAgua
     * const consumoAgua = await prisma.consumoAgua.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsumoAguaFindUniqueArgs>(args: SelectSubset<T, ConsumoAguaFindUniqueArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsumoAgua that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsumoAguaFindUniqueOrThrowArgs} args - Arguments to find a ConsumoAgua
     * @example
     * // Get one ConsumoAgua
     * const consumoAgua = await prisma.consumoAgua.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsumoAguaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsumoAguaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsumoAgua that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAguaFindFirstArgs} args - Arguments to find a ConsumoAgua
     * @example
     * // Get one ConsumoAgua
     * const consumoAgua = await prisma.consumoAgua.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsumoAguaFindFirstArgs>(args?: SelectSubset<T, ConsumoAguaFindFirstArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsumoAgua that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAguaFindFirstOrThrowArgs} args - Arguments to find a ConsumoAgua
     * @example
     * // Get one ConsumoAgua
     * const consumoAgua = await prisma.consumoAgua.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsumoAguaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsumoAguaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsumoAguas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAguaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsumoAguas
     * const consumoAguas = await prisma.consumoAgua.findMany()
     * 
     * // Get first 10 ConsumoAguas
     * const consumoAguas = await prisma.consumoAgua.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consumoAguaWithIdOnly = await prisma.consumoAgua.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsumoAguaFindManyArgs>(args?: SelectSubset<T, ConsumoAguaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsumoAgua.
     * @param {ConsumoAguaCreateArgs} args - Arguments to create a ConsumoAgua.
     * @example
     * // Create one ConsumoAgua
     * const ConsumoAgua = await prisma.consumoAgua.create({
     *   data: {
     *     // ... data to create a ConsumoAgua
     *   }
     * })
     * 
     */
    create<T extends ConsumoAguaCreateArgs>(args: SelectSubset<T, ConsumoAguaCreateArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsumoAguas.
     * @param {ConsumoAguaCreateManyArgs} args - Arguments to create many ConsumoAguas.
     * @example
     * // Create many ConsumoAguas
     * const consumoAgua = await prisma.consumoAgua.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsumoAguaCreateManyArgs>(args?: SelectSubset<T, ConsumoAguaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConsumoAgua.
     * @param {ConsumoAguaDeleteArgs} args - Arguments to delete one ConsumoAgua.
     * @example
     * // Delete one ConsumoAgua
     * const ConsumoAgua = await prisma.consumoAgua.delete({
     *   where: {
     *     // ... filter to delete one ConsumoAgua
     *   }
     * })
     * 
     */
    delete<T extends ConsumoAguaDeleteArgs>(args: SelectSubset<T, ConsumoAguaDeleteArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsumoAgua.
     * @param {ConsumoAguaUpdateArgs} args - Arguments to update one ConsumoAgua.
     * @example
     * // Update one ConsumoAgua
     * const consumoAgua = await prisma.consumoAgua.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsumoAguaUpdateArgs>(args: SelectSubset<T, ConsumoAguaUpdateArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsumoAguas.
     * @param {ConsumoAguaDeleteManyArgs} args - Arguments to filter ConsumoAguas to delete.
     * @example
     * // Delete a few ConsumoAguas
     * const { count } = await prisma.consumoAgua.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsumoAguaDeleteManyArgs>(args?: SelectSubset<T, ConsumoAguaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsumoAguas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAguaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsumoAguas
     * const consumoAgua = await prisma.consumoAgua.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsumoAguaUpdateManyArgs>(args: SelectSubset<T, ConsumoAguaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConsumoAgua.
     * @param {ConsumoAguaUpsertArgs} args - Arguments to update or create a ConsumoAgua.
     * @example
     * // Update or create a ConsumoAgua
     * const consumoAgua = await prisma.consumoAgua.upsert({
     *   create: {
     *     // ... data to create a ConsumoAgua
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsumoAgua we want to update
     *   }
     * })
     */
    upsert<T extends ConsumoAguaUpsertArgs>(args: SelectSubset<T, ConsumoAguaUpsertArgs<ExtArgs>>): Prisma__ConsumoAguaClient<$Result.GetResult<Prisma.$ConsumoAguaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsumoAguas that matches the filter.
     * @param {ConsumoAguaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const consumoAgua = await prisma.consumoAgua.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConsumoAguaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ConsumoAgua.
     * @param {ConsumoAguaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const consumoAgua = await prisma.consumoAgua.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConsumoAguaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ConsumoAguas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAguaCountArgs} args - Arguments to filter ConsumoAguas to count.
     * @example
     * // Count the number of ConsumoAguas
     * const count = await prisma.consumoAgua.count({
     *   where: {
     *     // ... the filter for the ConsumoAguas we want to count
     *   }
     * })
    **/
    count<T extends ConsumoAguaCountArgs>(
      args?: Subset<T, ConsumoAguaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsumoAguaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsumoAgua.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAguaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsumoAguaAggregateArgs>(args: Subset<T, ConsumoAguaAggregateArgs>): Prisma.PrismaPromise<GetConsumoAguaAggregateType<T>>

    /**
     * Group by ConsumoAgua.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumoAguaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsumoAguaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsumoAguaGroupByArgs['orderBy'] }
        : { orderBy?: ConsumoAguaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsumoAguaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumoAguaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsumoAgua model
   */
  readonly fields: ConsumoAguaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsumoAgua.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsumoAguaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsumoAgua model
   */
  interface ConsumoAguaFieldRefs {
    readonly id: FieldRef<"ConsumoAgua", 'String'>
    readonly quantidade: FieldRef<"ConsumoAgua", 'Float'>
    readonly data: FieldRef<"ConsumoAgua", 'DateTime'>
    readonly usuarioId: FieldRef<"ConsumoAgua", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConsumoAgua findUnique
   */
  export type ConsumoAguaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * Filter, which ConsumoAgua to fetch.
     */
    where: ConsumoAguaWhereUniqueInput
  }

  /**
   * ConsumoAgua findUniqueOrThrow
   */
  export type ConsumoAguaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * Filter, which ConsumoAgua to fetch.
     */
    where: ConsumoAguaWhereUniqueInput
  }

  /**
   * ConsumoAgua findFirst
   */
  export type ConsumoAguaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * Filter, which ConsumoAgua to fetch.
     */
    where?: ConsumoAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsumoAguas to fetch.
     */
    orderBy?: ConsumoAguaOrderByWithRelationInput | ConsumoAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsumoAguas.
     */
    cursor?: ConsumoAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsumoAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsumoAguas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsumoAguas.
     */
    distinct?: ConsumoAguaScalarFieldEnum | ConsumoAguaScalarFieldEnum[]
  }

  /**
   * ConsumoAgua findFirstOrThrow
   */
  export type ConsumoAguaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * Filter, which ConsumoAgua to fetch.
     */
    where?: ConsumoAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsumoAguas to fetch.
     */
    orderBy?: ConsumoAguaOrderByWithRelationInput | ConsumoAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsumoAguas.
     */
    cursor?: ConsumoAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsumoAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsumoAguas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsumoAguas.
     */
    distinct?: ConsumoAguaScalarFieldEnum | ConsumoAguaScalarFieldEnum[]
  }

  /**
   * ConsumoAgua findMany
   */
  export type ConsumoAguaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * Filter, which ConsumoAguas to fetch.
     */
    where?: ConsumoAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsumoAguas to fetch.
     */
    orderBy?: ConsumoAguaOrderByWithRelationInput | ConsumoAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsumoAguas.
     */
    cursor?: ConsumoAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsumoAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsumoAguas.
     */
    skip?: number
    distinct?: ConsumoAguaScalarFieldEnum | ConsumoAguaScalarFieldEnum[]
  }

  /**
   * ConsumoAgua create
   */
  export type ConsumoAguaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsumoAgua.
     */
    data: XOR<ConsumoAguaCreateInput, ConsumoAguaUncheckedCreateInput>
  }

  /**
   * ConsumoAgua createMany
   */
  export type ConsumoAguaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsumoAguas.
     */
    data: ConsumoAguaCreateManyInput | ConsumoAguaCreateManyInput[]
  }

  /**
   * ConsumoAgua update
   */
  export type ConsumoAguaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsumoAgua.
     */
    data: XOR<ConsumoAguaUpdateInput, ConsumoAguaUncheckedUpdateInput>
    /**
     * Choose, which ConsumoAgua to update.
     */
    where: ConsumoAguaWhereUniqueInput
  }

  /**
   * ConsumoAgua updateMany
   */
  export type ConsumoAguaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsumoAguas.
     */
    data: XOR<ConsumoAguaUpdateManyMutationInput, ConsumoAguaUncheckedUpdateManyInput>
    /**
     * Filter which ConsumoAguas to update
     */
    where?: ConsumoAguaWhereInput
    /**
     * Limit how many ConsumoAguas to update.
     */
    limit?: number
  }

  /**
   * ConsumoAgua upsert
   */
  export type ConsumoAguaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsumoAgua to update in case it exists.
     */
    where: ConsumoAguaWhereUniqueInput
    /**
     * In case the ConsumoAgua found by the `where` argument doesn't exist, create a new ConsumoAgua with this data.
     */
    create: XOR<ConsumoAguaCreateInput, ConsumoAguaUncheckedCreateInput>
    /**
     * In case the ConsumoAgua was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsumoAguaUpdateInput, ConsumoAguaUncheckedUpdateInput>
  }

  /**
   * ConsumoAgua delete
   */
  export type ConsumoAguaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
    /**
     * Filter which ConsumoAgua to delete.
     */
    where: ConsumoAguaWhereUniqueInput
  }

  /**
   * ConsumoAgua deleteMany
   */
  export type ConsumoAguaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsumoAguas to delete
     */
    where?: ConsumoAguaWhereInput
    /**
     * Limit how many ConsumoAguas to delete.
     */
    limit?: number
  }

  /**
   * ConsumoAgua findRaw
   */
  export type ConsumoAguaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ConsumoAgua aggregateRaw
   */
  export type ConsumoAguaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ConsumoAgua without action
   */
  export type ConsumoAguaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumoAgua
     */
    select?: ConsumoAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsumoAgua
     */
    omit?: ConsumoAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumoAguaInclude<ExtArgs> | null
  }


  /**
   * Model Refeicao
   */

  export type AggregateRefeicao = {
    _count: RefeicaoCountAggregateOutputType | null
    _avg: RefeicaoAvgAggregateOutputType | null
    _sum: RefeicaoSumAggregateOutputType | null
    _min: RefeicaoMinAggregateOutputType | null
    _max: RefeicaoMaxAggregateOutputType | null
  }

  export type RefeicaoAvgAggregateOutputType = {
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
  }

  export type RefeicaoSumAggregateOutputType = {
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
  }

  export type RefeicaoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    horario: Date | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
    usuarioId: string | null
  }

  export type RefeicaoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    horario: Date | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
    usuarioId: string | null
  }

  export type RefeicaoCountAggregateOutputType = {
    id: number
    nome: number
    horario: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    usuarioId: number
    _all: number
  }


  export type RefeicaoAvgAggregateInputType = {
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
  }

  export type RefeicaoSumAggregateInputType = {
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
  }

  export type RefeicaoMinAggregateInputType = {
    id?: true
    nome?: true
    horario?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
    usuarioId?: true
  }

  export type RefeicaoMaxAggregateInputType = {
    id?: true
    nome?: true
    horario?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
    usuarioId?: true
  }

  export type RefeicaoCountAggregateInputType = {
    id?: true
    nome?: true
    horario?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
    usuarioId?: true
    _all?: true
  }

  export type RefeicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refeicao to aggregate.
     */
    where?: RefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refeicaos to fetch.
     */
    orderBy?: RefeicaoOrderByWithRelationInput | RefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refeicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refeicaos
    **/
    _count?: true | RefeicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefeicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefeicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefeicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefeicaoMaxAggregateInputType
  }

  export type GetRefeicaoAggregateType<T extends RefeicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateRefeicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefeicao[P]>
      : GetScalarType<T[P], AggregateRefeicao[P]>
  }




  export type RefeicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefeicaoWhereInput
    orderBy?: RefeicaoOrderByWithAggregationInput | RefeicaoOrderByWithAggregationInput[]
    by: RefeicaoScalarFieldEnum[] | RefeicaoScalarFieldEnum
    having?: RefeicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefeicaoCountAggregateInputType | true
    _avg?: RefeicaoAvgAggregateInputType
    _sum?: RefeicaoSumAggregateInputType
    _min?: RefeicaoMinAggregateInputType
    _max?: RefeicaoMaxAggregateInputType
  }

  export type RefeicaoGroupByOutputType = {
    id: string
    nome: string
    horario: Date
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    usuarioId: string
    _count: RefeicaoCountAggregateOutputType | null
    _avg: RefeicaoAvgAggregateOutputType | null
    _sum: RefeicaoSumAggregateOutputType | null
    _min: RefeicaoMinAggregateOutputType | null
    _max: RefeicaoMaxAggregateOutputType | null
  }

  type GetRefeicaoGroupByPayload<T extends RefeicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefeicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefeicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefeicaoGroupByOutputType[P]>
            : GetScalarType<T[P], RefeicaoGroupByOutputType[P]>
        }
      >
    >


  export type RefeicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    horario?: boolean
    calorias?: boolean
    proteinas?: boolean
    carboidratos?: boolean
    gorduras?: boolean
    usuarioId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    alimentos?: boolean | Refeicao$alimentosArgs<ExtArgs>
    _count?: boolean | RefeicaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refeicao"]>



  export type RefeicaoSelectScalar = {
    id?: boolean
    nome?: boolean
    horario?: boolean
    calorias?: boolean
    proteinas?: boolean
    carboidratos?: boolean
    gorduras?: boolean
    usuarioId?: boolean
  }

  export type RefeicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "horario" | "calorias" | "proteinas" | "carboidratos" | "gorduras" | "usuarioId", ExtArgs["result"]["refeicao"]>
  export type RefeicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    alimentos?: boolean | Refeicao$alimentosArgs<ExtArgs>
    _count?: boolean | RefeicaoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RefeicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refeicao"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      alimentos: Prisma.$AlimentoRefeicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      horario: Date
      calorias: number
      proteinas: number
      carboidratos: number
      gorduras: number
      usuarioId: string
    }, ExtArgs["result"]["refeicao"]>
    composites: {}
  }

  type RefeicaoGetPayload<S extends boolean | null | undefined | RefeicaoDefaultArgs> = $Result.GetResult<Prisma.$RefeicaoPayload, S>

  type RefeicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefeicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefeicaoCountAggregateInputType | true
    }

  export interface RefeicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refeicao'], meta: { name: 'Refeicao' } }
    /**
     * Find zero or one Refeicao that matches the filter.
     * @param {RefeicaoFindUniqueArgs} args - Arguments to find a Refeicao
     * @example
     * // Get one Refeicao
     * const refeicao = await prisma.refeicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefeicaoFindUniqueArgs>(args: SelectSubset<T, RefeicaoFindUniqueArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refeicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefeicaoFindUniqueOrThrowArgs} args - Arguments to find a Refeicao
     * @example
     * // Get one Refeicao
     * const refeicao = await prisma.refeicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefeicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, RefeicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refeicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefeicaoFindFirstArgs} args - Arguments to find a Refeicao
     * @example
     * // Get one Refeicao
     * const refeicao = await prisma.refeicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefeicaoFindFirstArgs>(args?: SelectSubset<T, RefeicaoFindFirstArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refeicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefeicaoFindFirstOrThrowArgs} args - Arguments to find a Refeicao
     * @example
     * // Get one Refeicao
     * const refeicao = await prisma.refeicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefeicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, RefeicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refeicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefeicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refeicaos
     * const refeicaos = await prisma.refeicao.findMany()
     * 
     * // Get first 10 Refeicaos
     * const refeicaos = await prisma.refeicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refeicaoWithIdOnly = await prisma.refeicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefeicaoFindManyArgs>(args?: SelectSubset<T, RefeicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refeicao.
     * @param {RefeicaoCreateArgs} args - Arguments to create a Refeicao.
     * @example
     * // Create one Refeicao
     * const Refeicao = await prisma.refeicao.create({
     *   data: {
     *     // ... data to create a Refeicao
     *   }
     * })
     * 
     */
    create<T extends RefeicaoCreateArgs>(args: SelectSubset<T, RefeicaoCreateArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refeicaos.
     * @param {RefeicaoCreateManyArgs} args - Arguments to create many Refeicaos.
     * @example
     * // Create many Refeicaos
     * const refeicao = await prisma.refeicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefeicaoCreateManyArgs>(args?: SelectSubset<T, RefeicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refeicao.
     * @param {RefeicaoDeleteArgs} args - Arguments to delete one Refeicao.
     * @example
     * // Delete one Refeicao
     * const Refeicao = await prisma.refeicao.delete({
     *   where: {
     *     // ... filter to delete one Refeicao
     *   }
     * })
     * 
     */
    delete<T extends RefeicaoDeleteArgs>(args: SelectSubset<T, RefeicaoDeleteArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refeicao.
     * @param {RefeicaoUpdateArgs} args - Arguments to update one Refeicao.
     * @example
     * // Update one Refeicao
     * const refeicao = await prisma.refeicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefeicaoUpdateArgs>(args: SelectSubset<T, RefeicaoUpdateArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refeicaos.
     * @param {RefeicaoDeleteManyArgs} args - Arguments to filter Refeicaos to delete.
     * @example
     * // Delete a few Refeicaos
     * const { count } = await prisma.refeicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefeicaoDeleteManyArgs>(args?: SelectSubset<T, RefeicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refeicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefeicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refeicaos
     * const refeicao = await prisma.refeicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefeicaoUpdateManyArgs>(args: SelectSubset<T, RefeicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refeicao.
     * @param {RefeicaoUpsertArgs} args - Arguments to update or create a Refeicao.
     * @example
     * // Update or create a Refeicao
     * const refeicao = await prisma.refeicao.upsert({
     *   create: {
     *     // ... data to create a Refeicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refeicao we want to update
     *   }
     * })
     */
    upsert<T extends RefeicaoUpsertArgs>(args: SelectSubset<T, RefeicaoUpsertArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refeicaos that matches the filter.
     * @param {RefeicaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const refeicao = await prisma.refeicao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RefeicaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Refeicao.
     * @param {RefeicaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const refeicao = await prisma.refeicao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RefeicaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Refeicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefeicaoCountArgs} args - Arguments to filter Refeicaos to count.
     * @example
     * // Count the number of Refeicaos
     * const count = await prisma.refeicao.count({
     *   where: {
     *     // ... the filter for the Refeicaos we want to count
     *   }
     * })
    **/
    count<T extends RefeicaoCountArgs>(
      args?: Subset<T, RefeicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefeicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refeicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefeicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefeicaoAggregateArgs>(args: Subset<T, RefeicaoAggregateArgs>): Prisma.PrismaPromise<GetRefeicaoAggregateType<T>>

    /**
     * Group by Refeicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefeicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefeicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefeicaoGroupByArgs['orderBy'] }
        : { orderBy?: RefeicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefeicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefeicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refeicao model
   */
  readonly fields: RefeicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refeicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefeicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alimentos<T extends Refeicao$alimentosArgs<ExtArgs> = {}>(args?: Subset<T, Refeicao$alimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Refeicao model
   */
  interface RefeicaoFieldRefs {
    readonly id: FieldRef<"Refeicao", 'String'>
    readonly nome: FieldRef<"Refeicao", 'String'>
    readonly horario: FieldRef<"Refeicao", 'DateTime'>
    readonly calorias: FieldRef<"Refeicao", 'Float'>
    readonly proteinas: FieldRef<"Refeicao", 'Float'>
    readonly carboidratos: FieldRef<"Refeicao", 'Float'>
    readonly gorduras: FieldRef<"Refeicao", 'Float'>
    readonly usuarioId: FieldRef<"Refeicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Refeicao findUnique
   */
  export type RefeicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which Refeicao to fetch.
     */
    where: RefeicaoWhereUniqueInput
  }

  /**
   * Refeicao findUniqueOrThrow
   */
  export type RefeicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which Refeicao to fetch.
     */
    where: RefeicaoWhereUniqueInput
  }

  /**
   * Refeicao findFirst
   */
  export type RefeicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which Refeicao to fetch.
     */
    where?: RefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refeicaos to fetch.
     */
    orderBy?: RefeicaoOrderByWithRelationInput | RefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refeicaos.
     */
    cursor?: RefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refeicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refeicaos.
     */
    distinct?: RefeicaoScalarFieldEnum | RefeicaoScalarFieldEnum[]
  }

  /**
   * Refeicao findFirstOrThrow
   */
  export type RefeicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which Refeicao to fetch.
     */
    where?: RefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refeicaos to fetch.
     */
    orderBy?: RefeicaoOrderByWithRelationInput | RefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refeicaos.
     */
    cursor?: RefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refeicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refeicaos.
     */
    distinct?: RefeicaoScalarFieldEnum | RefeicaoScalarFieldEnum[]
  }

  /**
   * Refeicao findMany
   */
  export type RefeicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which Refeicaos to fetch.
     */
    where?: RefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refeicaos to fetch.
     */
    orderBy?: RefeicaoOrderByWithRelationInput | RefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refeicaos.
     */
    cursor?: RefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refeicaos.
     */
    skip?: number
    distinct?: RefeicaoScalarFieldEnum | RefeicaoScalarFieldEnum[]
  }

  /**
   * Refeicao create
   */
  export type RefeicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Refeicao.
     */
    data: XOR<RefeicaoCreateInput, RefeicaoUncheckedCreateInput>
  }

  /**
   * Refeicao createMany
   */
  export type RefeicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refeicaos.
     */
    data: RefeicaoCreateManyInput | RefeicaoCreateManyInput[]
  }

  /**
   * Refeicao update
   */
  export type RefeicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Refeicao.
     */
    data: XOR<RefeicaoUpdateInput, RefeicaoUncheckedUpdateInput>
    /**
     * Choose, which Refeicao to update.
     */
    where: RefeicaoWhereUniqueInput
  }

  /**
   * Refeicao updateMany
   */
  export type RefeicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refeicaos.
     */
    data: XOR<RefeicaoUpdateManyMutationInput, RefeicaoUncheckedUpdateManyInput>
    /**
     * Filter which Refeicaos to update
     */
    where?: RefeicaoWhereInput
    /**
     * Limit how many Refeicaos to update.
     */
    limit?: number
  }

  /**
   * Refeicao upsert
   */
  export type RefeicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Refeicao to update in case it exists.
     */
    where: RefeicaoWhereUniqueInput
    /**
     * In case the Refeicao found by the `where` argument doesn't exist, create a new Refeicao with this data.
     */
    create: XOR<RefeicaoCreateInput, RefeicaoUncheckedCreateInput>
    /**
     * In case the Refeicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefeicaoUpdateInput, RefeicaoUncheckedUpdateInput>
  }

  /**
   * Refeicao delete
   */
  export type RefeicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
    /**
     * Filter which Refeicao to delete.
     */
    where: RefeicaoWhereUniqueInput
  }

  /**
   * Refeicao deleteMany
   */
  export type RefeicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refeicaos to delete
     */
    where?: RefeicaoWhereInput
    /**
     * Limit how many Refeicaos to delete.
     */
    limit?: number
  }

  /**
   * Refeicao findRaw
   */
  export type RefeicaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Refeicao aggregateRaw
   */
  export type RefeicaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Refeicao.alimentos
   */
  export type Refeicao$alimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    where?: AlimentoRefeicaoWhereInput
    orderBy?: AlimentoRefeicaoOrderByWithRelationInput | AlimentoRefeicaoOrderByWithRelationInput[]
    cursor?: AlimentoRefeicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlimentoRefeicaoScalarFieldEnum | AlimentoRefeicaoScalarFieldEnum[]
  }

  /**
   * Refeicao without action
   */
  export type RefeicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refeicao
     */
    select?: RefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refeicao
     */
    omit?: RefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefeicaoInclude<ExtArgs> | null
  }


  /**
   * Model AlimentoRefeicao
   */

  export type AggregateAlimentoRefeicao = {
    _count: AlimentoRefeicaoCountAggregateOutputType | null
    _avg: AlimentoRefeicaoAvgAggregateOutputType | null
    _sum: AlimentoRefeicaoSumAggregateOutputType | null
    _min: AlimentoRefeicaoMinAggregateOutputType | null
    _max: AlimentoRefeicaoMaxAggregateOutputType | null
  }

  export type AlimentoRefeicaoAvgAggregateOutputType = {
    quantidade: number | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
  }

  export type AlimentoRefeicaoSumAggregateOutputType = {
    quantidade: number | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
  }

  export type AlimentoRefeicaoMinAggregateOutputType = {
    id: string | null
    nomeAlimento: string | null
    quantidade: number | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
    codigoOpenFood: string | null
    refeicaoId: string | null
  }

  export type AlimentoRefeicaoMaxAggregateOutputType = {
    id: string | null
    nomeAlimento: string | null
    quantidade: number | null
    calorias: number | null
    proteinas: number | null
    carboidratos: number | null
    gorduras: number | null
    codigoOpenFood: string | null
    refeicaoId: string | null
  }

  export type AlimentoRefeicaoCountAggregateOutputType = {
    id: number
    nomeAlimento: number
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood: number
    refeicaoId: number
    _all: number
  }


  export type AlimentoRefeicaoAvgAggregateInputType = {
    quantidade?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
  }

  export type AlimentoRefeicaoSumAggregateInputType = {
    quantidade?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
  }

  export type AlimentoRefeicaoMinAggregateInputType = {
    id?: true
    nomeAlimento?: true
    quantidade?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
    codigoOpenFood?: true
    refeicaoId?: true
  }

  export type AlimentoRefeicaoMaxAggregateInputType = {
    id?: true
    nomeAlimento?: true
    quantidade?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
    codigoOpenFood?: true
    refeicaoId?: true
  }

  export type AlimentoRefeicaoCountAggregateInputType = {
    id?: true
    nomeAlimento?: true
    quantidade?: true
    calorias?: true
    proteinas?: true
    carboidratos?: true
    gorduras?: true
    codigoOpenFood?: true
    refeicaoId?: true
    _all?: true
  }

  export type AlimentoRefeicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlimentoRefeicao to aggregate.
     */
    where?: AlimentoRefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlimentoRefeicaos to fetch.
     */
    orderBy?: AlimentoRefeicaoOrderByWithRelationInput | AlimentoRefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlimentoRefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlimentoRefeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlimentoRefeicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlimentoRefeicaos
    **/
    _count?: true | AlimentoRefeicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlimentoRefeicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlimentoRefeicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlimentoRefeicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlimentoRefeicaoMaxAggregateInputType
  }

  export type GetAlimentoRefeicaoAggregateType<T extends AlimentoRefeicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlimentoRefeicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlimentoRefeicao[P]>
      : GetScalarType<T[P], AggregateAlimentoRefeicao[P]>
  }




  export type AlimentoRefeicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlimentoRefeicaoWhereInput
    orderBy?: AlimentoRefeicaoOrderByWithAggregationInput | AlimentoRefeicaoOrderByWithAggregationInput[]
    by: AlimentoRefeicaoScalarFieldEnum[] | AlimentoRefeicaoScalarFieldEnum
    having?: AlimentoRefeicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlimentoRefeicaoCountAggregateInputType | true
    _avg?: AlimentoRefeicaoAvgAggregateInputType
    _sum?: AlimentoRefeicaoSumAggregateInputType
    _min?: AlimentoRefeicaoMinAggregateInputType
    _max?: AlimentoRefeicaoMaxAggregateInputType
  }

  export type AlimentoRefeicaoGroupByOutputType = {
    id: string
    nomeAlimento: string
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood: string | null
    refeicaoId: string
    _count: AlimentoRefeicaoCountAggregateOutputType | null
    _avg: AlimentoRefeicaoAvgAggregateOutputType | null
    _sum: AlimentoRefeicaoSumAggregateOutputType | null
    _min: AlimentoRefeicaoMinAggregateOutputType | null
    _max: AlimentoRefeicaoMaxAggregateOutputType | null
  }

  type GetAlimentoRefeicaoGroupByPayload<T extends AlimentoRefeicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlimentoRefeicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlimentoRefeicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlimentoRefeicaoGroupByOutputType[P]>
            : GetScalarType<T[P], AlimentoRefeicaoGroupByOutputType[P]>
        }
      >
    >


  export type AlimentoRefeicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeAlimento?: boolean
    quantidade?: boolean
    calorias?: boolean
    proteinas?: boolean
    carboidratos?: boolean
    gorduras?: boolean
    codigoOpenFood?: boolean
    refeicaoId?: boolean
    refeicao?: boolean | RefeicaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alimentoRefeicao"]>



  export type AlimentoRefeicaoSelectScalar = {
    id?: boolean
    nomeAlimento?: boolean
    quantidade?: boolean
    calorias?: boolean
    proteinas?: boolean
    carboidratos?: boolean
    gorduras?: boolean
    codigoOpenFood?: boolean
    refeicaoId?: boolean
  }

  export type AlimentoRefeicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeAlimento" | "quantidade" | "calorias" | "proteinas" | "carboidratos" | "gorduras" | "codigoOpenFood" | "refeicaoId", ExtArgs["result"]["alimentoRefeicao"]>
  export type AlimentoRefeicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refeicao?: boolean | RefeicaoDefaultArgs<ExtArgs>
  }

  export type $AlimentoRefeicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlimentoRefeicao"
    objects: {
      refeicao: Prisma.$RefeicaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeAlimento: string
      quantidade: number
      calorias: number
      proteinas: number
      carboidratos: number
      gorduras: number
      codigoOpenFood: string | null
      refeicaoId: string
    }, ExtArgs["result"]["alimentoRefeicao"]>
    composites: {}
  }

  type AlimentoRefeicaoGetPayload<S extends boolean | null | undefined | AlimentoRefeicaoDefaultArgs> = $Result.GetResult<Prisma.$AlimentoRefeicaoPayload, S>

  type AlimentoRefeicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlimentoRefeicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlimentoRefeicaoCountAggregateInputType | true
    }

  export interface AlimentoRefeicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlimentoRefeicao'], meta: { name: 'AlimentoRefeicao' } }
    /**
     * Find zero or one AlimentoRefeicao that matches the filter.
     * @param {AlimentoRefeicaoFindUniqueArgs} args - Arguments to find a AlimentoRefeicao
     * @example
     * // Get one AlimentoRefeicao
     * const alimentoRefeicao = await prisma.alimentoRefeicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlimentoRefeicaoFindUniqueArgs>(args: SelectSubset<T, AlimentoRefeicaoFindUniqueArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlimentoRefeicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlimentoRefeicaoFindUniqueOrThrowArgs} args - Arguments to find a AlimentoRefeicao
     * @example
     * // Get one AlimentoRefeicao
     * const alimentoRefeicao = await prisma.alimentoRefeicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlimentoRefeicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlimentoRefeicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlimentoRefeicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentoRefeicaoFindFirstArgs} args - Arguments to find a AlimentoRefeicao
     * @example
     * // Get one AlimentoRefeicao
     * const alimentoRefeicao = await prisma.alimentoRefeicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlimentoRefeicaoFindFirstArgs>(args?: SelectSubset<T, AlimentoRefeicaoFindFirstArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlimentoRefeicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentoRefeicaoFindFirstOrThrowArgs} args - Arguments to find a AlimentoRefeicao
     * @example
     * // Get one AlimentoRefeicao
     * const alimentoRefeicao = await prisma.alimentoRefeicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlimentoRefeicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlimentoRefeicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlimentoRefeicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentoRefeicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlimentoRefeicaos
     * const alimentoRefeicaos = await prisma.alimentoRefeicao.findMany()
     * 
     * // Get first 10 AlimentoRefeicaos
     * const alimentoRefeicaos = await prisma.alimentoRefeicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alimentoRefeicaoWithIdOnly = await prisma.alimentoRefeicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlimentoRefeicaoFindManyArgs>(args?: SelectSubset<T, AlimentoRefeicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlimentoRefeicao.
     * @param {AlimentoRefeicaoCreateArgs} args - Arguments to create a AlimentoRefeicao.
     * @example
     * // Create one AlimentoRefeicao
     * const AlimentoRefeicao = await prisma.alimentoRefeicao.create({
     *   data: {
     *     // ... data to create a AlimentoRefeicao
     *   }
     * })
     * 
     */
    create<T extends AlimentoRefeicaoCreateArgs>(args: SelectSubset<T, AlimentoRefeicaoCreateArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlimentoRefeicaos.
     * @param {AlimentoRefeicaoCreateManyArgs} args - Arguments to create many AlimentoRefeicaos.
     * @example
     * // Create many AlimentoRefeicaos
     * const alimentoRefeicao = await prisma.alimentoRefeicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlimentoRefeicaoCreateManyArgs>(args?: SelectSubset<T, AlimentoRefeicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlimentoRefeicao.
     * @param {AlimentoRefeicaoDeleteArgs} args - Arguments to delete one AlimentoRefeicao.
     * @example
     * // Delete one AlimentoRefeicao
     * const AlimentoRefeicao = await prisma.alimentoRefeicao.delete({
     *   where: {
     *     // ... filter to delete one AlimentoRefeicao
     *   }
     * })
     * 
     */
    delete<T extends AlimentoRefeicaoDeleteArgs>(args: SelectSubset<T, AlimentoRefeicaoDeleteArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlimentoRefeicao.
     * @param {AlimentoRefeicaoUpdateArgs} args - Arguments to update one AlimentoRefeicao.
     * @example
     * // Update one AlimentoRefeicao
     * const alimentoRefeicao = await prisma.alimentoRefeicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlimentoRefeicaoUpdateArgs>(args: SelectSubset<T, AlimentoRefeicaoUpdateArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlimentoRefeicaos.
     * @param {AlimentoRefeicaoDeleteManyArgs} args - Arguments to filter AlimentoRefeicaos to delete.
     * @example
     * // Delete a few AlimentoRefeicaos
     * const { count } = await prisma.alimentoRefeicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlimentoRefeicaoDeleteManyArgs>(args?: SelectSubset<T, AlimentoRefeicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlimentoRefeicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentoRefeicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlimentoRefeicaos
     * const alimentoRefeicao = await prisma.alimentoRefeicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlimentoRefeicaoUpdateManyArgs>(args: SelectSubset<T, AlimentoRefeicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlimentoRefeicao.
     * @param {AlimentoRefeicaoUpsertArgs} args - Arguments to update or create a AlimentoRefeicao.
     * @example
     * // Update or create a AlimentoRefeicao
     * const alimentoRefeicao = await prisma.alimentoRefeicao.upsert({
     *   create: {
     *     // ... data to create a AlimentoRefeicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlimentoRefeicao we want to update
     *   }
     * })
     */
    upsert<T extends AlimentoRefeicaoUpsertArgs>(args: SelectSubset<T, AlimentoRefeicaoUpsertArgs<ExtArgs>>): Prisma__AlimentoRefeicaoClient<$Result.GetResult<Prisma.$AlimentoRefeicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlimentoRefeicaos that matches the filter.
     * @param {AlimentoRefeicaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const alimentoRefeicao = await prisma.alimentoRefeicao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AlimentoRefeicaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AlimentoRefeicao.
     * @param {AlimentoRefeicaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const alimentoRefeicao = await prisma.alimentoRefeicao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AlimentoRefeicaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AlimentoRefeicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentoRefeicaoCountArgs} args - Arguments to filter AlimentoRefeicaos to count.
     * @example
     * // Count the number of AlimentoRefeicaos
     * const count = await prisma.alimentoRefeicao.count({
     *   where: {
     *     // ... the filter for the AlimentoRefeicaos we want to count
     *   }
     * })
    **/
    count<T extends AlimentoRefeicaoCountArgs>(
      args?: Subset<T, AlimentoRefeicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlimentoRefeicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlimentoRefeicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentoRefeicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlimentoRefeicaoAggregateArgs>(args: Subset<T, AlimentoRefeicaoAggregateArgs>): Prisma.PrismaPromise<GetAlimentoRefeicaoAggregateType<T>>

    /**
     * Group by AlimentoRefeicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlimentoRefeicaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlimentoRefeicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlimentoRefeicaoGroupByArgs['orderBy'] }
        : { orderBy?: AlimentoRefeicaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlimentoRefeicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlimentoRefeicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlimentoRefeicao model
   */
  readonly fields: AlimentoRefeicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlimentoRefeicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlimentoRefeicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refeicao<T extends RefeicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RefeicaoDefaultArgs<ExtArgs>>): Prisma__RefeicaoClient<$Result.GetResult<Prisma.$RefeicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlimentoRefeicao model
   */
  interface AlimentoRefeicaoFieldRefs {
    readonly id: FieldRef<"AlimentoRefeicao", 'String'>
    readonly nomeAlimento: FieldRef<"AlimentoRefeicao", 'String'>
    readonly quantidade: FieldRef<"AlimentoRefeicao", 'Float'>
    readonly calorias: FieldRef<"AlimentoRefeicao", 'Float'>
    readonly proteinas: FieldRef<"AlimentoRefeicao", 'Float'>
    readonly carboidratos: FieldRef<"AlimentoRefeicao", 'Float'>
    readonly gorduras: FieldRef<"AlimentoRefeicao", 'Float'>
    readonly codigoOpenFood: FieldRef<"AlimentoRefeicao", 'String'>
    readonly refeicaoId: FieldRef<"AlimentoRefeicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlimentoRefeicao findUnique
   */
  export type AlimentoRefeicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which AlimentoRefeicao to fetch.
     */
    where: AlimentoRefeicaoWhereUniqueInput
  }

  /**
   * AlimentoRefeicao findUniqueOrThrow
   */
  export type AlimentoRefeicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which AlimentoRefeicao to fetch.
     */
    where: AlimentoRefeicaoWhereUniqueInput
  }

  /**
   * AlimentoRefeicao findFirst
   */
  export type AlimentoRefeicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which AlimentoRefeicao to fetch.
     */
    where?: AlimentoRefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlimentoRefeicaos to fetch.
     */
    orderBy?: AlimentoRefeicaoOrderByWithRelationInput | AlimentoRefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlimentoRefeicaos.
     */
    cursor?: AlimentoRefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlimentoRefeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlimentoRefeicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlimentoRefeicaos.
     */
    distinct?: AlimentoRefeicaoScalarFieldEnum | AlimentoRefeicaoScalarFieldEnum[]
  }

  /**
   * AlimentoRefeicao findFirstOrThrow
   */
  export type AlimentoRefeicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which AlimentoRefeicao to fetch.
     */
    where?: AlimentoRefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlimentoRefeicaos to fetch.
     */
    orderBy?: AlimentoRefeicaoOrderByWithRelationInput | AlimentoRefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlimentoRefeicaos.
     */
    cursor?: AlimentoRefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlimentoRefeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlimentoRefeicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlimentoRefeicaos.
     */
    distinct?: AlimentoRefeicaoScalarFieldEnum | AlimentoRefeicaoScalarFieldEnum[]
  }

  /**
   * AlimentoRefeicao findMany
   */
  export type AlimentoRefeicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * Filter, which AlimentoRefeicaos to fetch.
     */
    where?: AlimentoRefeicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlimentoRefeicaos to fetch.
     */
    orderBy?: AlimentoRefeicaoOrderByWithRelationInput | AlimentoRefeicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlimentoRefeicaos.
     */
    cursor?: AlimentoRefeicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlimentoRefeicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlimentoRefeicaos.
     */
    skip?: number
    distinct?: AlimentoRefeicaoScalarFieldEnum | AlimentoRefeicaoScalarFieldEnum[]
  }

  /**
   * AlimentoRefeicao create
   */
  export type AlimentoRefeicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a AlimentoRefeicao.
     */
    data: XOR<AlimentoRefeicaoCreateInput, AlimentoRefeicaoUncheckedCreateInput>
  }

  /**
   * AlimentoRefeicao createMany
   */
  export type AlimentoRefeicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlimentoRefeicaos.
     */
    data: AlimentoRefeicaoCreateManyInput | AlimentoRefeicaoCreateManyInput[]
  }

  /**
   * AlimentoRefeicao update
   */
  export type AlimentoRefeicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a AlimentoRefeicao.
     */
    data: XOR<AlimentoRefeicaoUpdateInput, AlimentoRefeicaoUncheckedUpdateInput>
    /**
     * Choose, which AlimentoRefeicao to update.
     */
    where: AlimentoRefeicaoWhereUniqueInput
  }

  /**
   * AlimentoRefeicao updateMany
   */
  export type AlimentoRefeicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlimentoRefeicaos.
     */
    data: XOR<AlimentoRefeicaoUpdateManyMutationInput, AlimentoRefeicaoUncheckedUpdateManyInput>
    /**
     * Filter which AlimentoRefeicaos to update
     */
    where?: AlimentoRefeicaoWhereInput
    /**
     * Limit how many AlimentoRefeicaos to update.
     */
    limit?: number
  }

  /**
   * AlimentoRefeicao upsert
   */
  export type AlimentoRefeicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the AlimentoRefeicao to update in case it exists.
     */
    where: AlimentoRefeicaoWhereUniqueInput
    /**
     * In case the AlimentoRefeicao found by the `where` argument doesn't exist, create a new AlimentoRefeicao with this data.
     */
    create: XOR<AlimentoRefeicaoCreateInput, AlimentoRefeicaoUncheckedCreateInput>
    /**
     * In case the AlimentoRefeicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlimentoRefeicaoUpdateInput, AlimentoRefeicaoUncheckedUpdateInput>
  }

  /**
   * AlimentoRefeicao delete
   */
  export type AlimentoRefeicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
    /**
     * Filter which AlimentoRefeicao to delete.
     */
    where: AlimentoRefeicaoWhereUniqueInput
  }

  /**
   * AlimentoRefeicao deleteMany
   */
  export type AlimentoRefeicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlimentoRefeicaos to delete
     */
    where?: AlimentoRefeicaoWhereInput
    /**
     * Limit how many AlimentoRefeicaos to delete.
     */
    limit?: number
  }

  /**
   * AlimentoRefeicao findRaw
   */
  export type AlimentoRefeicaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AlimentoRefeicao aggregateRaw
   */
  export type AlimentoRefeicaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AlimentoRefeicao without action
   */
  export type AlimentoRefeicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlimentoRefeicao
     */
    select?: AlimentoRefeicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlimentoRefeicao
     */
    omit?: AlimentoRefeicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlimentoRefeicaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    sobrenome: 'sobrenome',
    dataNascimento: 'dataNascimento',
    peso: 'peso',
    altura: 'altura',
    sexo: 'sexo',
    objetivo: 'objetivo',
    nivelAtividade: 'nivelAtividade',
    usuarioId: 'usuarioId'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const MetaScalarFieldEnum: {
    id: 'id',
    calorias: 'calorias',
    proteinas: 'proteinas',
    carboidratos: 'carboidratos',
    agua: 'agua',
    gorduras: 'gorduras',
    dataCriacao: 'dataCriacao',
    usuarioId: 'usuarioId'
  };

  export type MetaScalarFieldEnum = (typeof MetaScalarFieldEnum)[keyof typeof MetaScalarFieldEnum]


  export const ConsumoAguaScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    data: 'data',
    usuarioId: 'usuarioId'
  };

  export type ConsumoAguaScalarFieldEnum = (typeof ConsumoAguaScalarFieldEnum)[keyof typeof ConsumoAguaScalarFieldEnum]


  export const RefeicaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    horario: 'horario',
    calorias: 'calorias',
    proteinas: 'proteinas',
    carboidratos: 'carboidratos',
    gorduras: 'gorduras',
    usuarioId: 'usuarioId'
  };

  export type RefeicaoScalarFieldEnum = (typeof RefeicaoScalarFieldEnum)[keyof typeof RefeicaoScalarFieldEnum]


  export const AlimentoRefeicaoScalarFieldEnum: {
    id: 'id',
    nomeAlimento: 'nomeAlimento',
    quantidade: 'quantidade',
    calorias: 'calorias',
    proteinas: 'proteinas',
    carboidratos: 'carboidratos',
    gorduras: 'gorduras',
    codigoOpenFood: 'codigoOpenFood',
    refeicaoId: 'refeicaoId'
  };

  export type AlimentoRefeicaoScalarFieldEnum = (typeof AlimentoRefeicaoScalarFieldEnum)[keyof typeof AlimentoRefeicaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    perfil?: XOR<PerfilNullableScalarRelationFilter, PerfilWhereInput> | null
    meta?: XOR<MetaNullableScalarRelationFilter, MetaWhereInput> | null
    consumoAgua?: ConsumoAguaListRelationFilter
    refeicoes?: RefeicaoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    perfil?: PerfilOrderByWithRelationInput
    meta?: MetaOrderByWithRelationInput
    consumoAgua?: ConsumoAguaOrderByRelationAggregateInput
    refeicoes?: RefeicaoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    perfil?: XOR<PerfilNullableScalarRelationFilter, PerfilWhereInput> | null
    meta?: XOR<MetaNullableScalarRelationFilter, MetaWhereInput> | null
    consumoAgua?: ConsumoAguaListRelationFilter
    refeicoes?: RefeicaoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: StringFilter<"Perfil"> | string
    nome?: StringFilter<"Perfil"> | string
    sobrenome?: StringFilter<"Perfil"> | string
    dataNascimento?: DateTimeFilter<"Perfil"> | Date | string
    peso?: FloatFilter<"Perfil"> | number
    altura?: FloatFilter<"Perfil"> | number
    sexo?: StringFilter<"Perfil"> | string
    objetivo?: StringFilter<"Perfil"> | string
    nivelAtividade?: StringFilter<"Perfil"> | string
    usuarioId?: StringFilter<"Perfil"> | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    sexo?: SortOrder
    objetivo?: SortOrder
    nivelAtividade?: SortOrder
    usuarioId?: SortOrder
    usuario?: UserOrderByWithRelationInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    nome?: StringFilter<"Perfil"> | string
    sobrenome?: StringFilter<"Perfil"> | string
    dataNascimento?: DateTimeFilter<"Perfil"> | Date | string
    peso?: FloatFilter<"Perfil"> | number
    altura?: FloatFilter<"Perfil"> | number
    sexo?: StringFilter<"Perfil"> | string
    objetivo?: StringFilter<"Perfil"> | string
    nivelAtividade?: StringFilter<"Perfil"> | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "usuarioId">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    sexo?: SortOrder
    objetivo?: SortOrder
    nivelAtividade?: SortOrder
    usuarioId?: SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Perfil"> | string
    nome?: StringWithAggregatesFilter<"Perfil"> | string
    sobrenome?: StringWithAggregatesFilter<"Perfil"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Perfil"> | Date | string
    peso?: FloatWithAggregatesFilter<"Perfil"> | number
    altura?: FloatWithAggregatesFilter<"Perfil"> | number
    sexo?: StringWithAggregatesFilter<"Perfil"> | string
    objetivo?: StringWithAggregatesFilter<"Perfil"> | string
    nivelAtividade?: StringWithAggregatesFilter<"Perfil"> | string
    usuarioId?: StringWithAggregatesFilter<"Perfil"> | string
  }

  export type MetaWhereInput = {
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    id?: StringFilter<"Meta"> | string
    calorias?: FloatFilter<"Meta"> | number
    proteinas?: FloatFilter<"Meta"> | number
    carboidratos?: FloatFilter<"Meta"> | number
    agua?: FloatFilter<"Meta"> | number
    gorduras?: FloatFilter<"Meta"> | number
    dataCriacao?: DateTimeFilter<"Meta"> | Date | string
    usuarioId?: StringFilter<"Meta"> | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MetaOrderByWithRelationInput = {
    id?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    agua?: SortOrder
    gorduras?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
    usuario?: UserOrderByWithRelationInput
  }

  export type MetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId?: string
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    calorias?: FloatFilter<"Meta"> | number
    proteinas?: FloatFilter<"Meta"> | number
    carboidratos?: FloatFilter<"Meta"> | number
    agua?: FloatFilter<"Meta"> | number
    gorduras?: FloatFilter<"Meta"> | number
    dataCriacao?: DateTimeFilter<"Meta"> | Date | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "usuarioId">

  export type MetaOrderByWithAggregationInput = {
    id?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    agua?: SortOrder
    gorduras?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
    _count?: MetaCountOrderByAggregateInput
    _avg?: MetaAvgOrderByAggregateInput
    _max?: MetaMaxOrderByAggregateInput
    _min?: MetaMinOrderByAggregateInput
    _sum?: MetaSumOrderByAggregateInput
  }

  export type MetaScalarWhereWithAggregatesInput = {
    AND?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    OR?: MetaScalarWhereWithAggregatesInput[]
    NOT?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meta"> | string
    calorias?: FloatWithAggregatesFilter<"Meta"> | number
    proteinas?: FloatWithAggregatesFilter<"Meta"> | number
    carboidratos?: FloatWithAggregatesFilter<"Meta"> | number
    agua?: FloatWithAggregatesFilter<"Meta"> | number
    gorduras?: FloatWithAggregatesFilter<"Meta"> | number
    dataCriacao?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"Meta"> | string
  }

  export type ConsumoAguaWhereInput = {
    AND?: ConsumoAguaWhereInput | ConsumoAguaWhereInput[]
    OR?: ConsumoAguaWhereInput[]
    NOT?: ConsumoAguaWhereInput | ConsumoAguaWhereInput[]
    id?: StringFilter<"ConsumoAgua"> | string
    quantidade?: FloatFilter<"ConsumoAgua"> | number
    data?: DateTimeFilter<"ConsumoAgua"> | Date | string
    usuarioId?: StringFilter<"ConsumoAgua"> | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConsumoAguaOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    usuario?: UserOrderByWithRelationInput
  }

  export type ConsumoAguaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsumoAguaWhereInput | ConsumoAguaWhereInput[]
    OR?: ConsumoAguaWhereInput[]
    NOT?: ConsumoAguaWhereInput | ConsumoAguaWhereInput[]
    quantidade?: FloatFilter<"ConsumoAgua"> | number
    data?: DateTimeFilter<"ConsumoAgua"> | Date | string
    usuarioId?: StringFilter<"ConsumoAgua"> | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ConsumoAguaOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
    _count?: ConsumoAguaCountOrderByAggregateInput
    _avg?: ConsumoAguaAvgOrderByAggregateInput
    _max?: ConsumoAguaMaxOrderByAggregateInput
    _min?: ConsumoAguaMinOrderByAggregateInput
    _sum?: ConsumoAguaSumOrderByAggregateInput
  }

  export type ConsumoAguaScalarWhereWithAggregatesInput = {
    AND?: ConsumoAguaScalarWhereWithAggregatesInput | ConsumoAguaScalarWhereWithAggregatesInput[]
    OR?: ConsumoAguaScalarWhereWithAggregatesInput[]
    NOT?: ConsumoAguaScalarWhereWithAggregatesInput | ConsumoAguaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsumoAgua"> | string
    quantidade?: FloatWithAggregatesFilter<"ConsumoAgua"> | number
    data?: DateTimeWithAggregatesFilter<"ConsumoAgua"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"ConsumoAgua"> | string
  }

  export type RefeicaoWhereInput = {
    AND?: RefeicaoWhereInput | RefeicaoWhereInput[]
    OR?: RefeicaoWhereInput[]
    NOT?: RefeicaoWhereInput | RefeicaoWhereInput[]
    id?: StringFilter<"Refeicao"> | string
    nome?: StringFilter<"Refeicao"> | string
    horario?: DateTimeFilter<"Refeicao"> | Date | string
    calorias?: FloatFilter<"Refeicao"> | number
    proteinas?: FloatFilter<"Refeicao"> | number
    carboidratos?: FloatFilter<"Refeicao"> | number
    gorduras?: FloatFilter<"Refeicao"> | number
    usuarioId?: StringFilter<"Refeicao"> | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    alimentos?: AlimentoRefeicaoListRelationFilter
  }

  export type RefeicaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    usuarioId?: SortOrder
    usuario?: UserOrderByWithRelationInput
    alimentos?: AlimentoRefeicaoOrderByRelationAggregateInput
  }

  export type RefeicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefeicaoWhereInput | RefeicaoWhereInput[]
    OR?: RefeicaoWhereInput[]
    NOT?: RefeicaoWhereInput | RefeicaoWhereInput[]
    nome?: StringFilter<"Refeicao"> | string
    horario?: DateTimeFilter<"Refeicao"> | Date | string
    calorias?: FloatFilter<"Refeicao"> | number
    proteinas?: FloatFilter<"Refeicao"> | number
    carboidratos?: FloatFilter<"Refeicao"> | number
    gorduras?: FloatFilter<"Refeicao"> | number
    usuarioId?: StringFilter<"Refeicao"> | string
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    alimentos?: AlimentoRefeicaoListRelationFilter
  }, "id">

  export type RefeicaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    usuarioId?: SortOrder
    _count?: RefeicaoCountOrderByAggregateInput
    _avg?: RefeicaoAvgOrderByAggregateInput
    _max?: RefeicaoMaxOrderByAggregateInput
    _min?: RefeicaoMinOrderByAggregateInput
    _sum?: RefeicaoSumOrderByAggregateInput
  }

  export type RefeicaoScalarWhereWithAggregatesInput = {
    AND?: RefeicaoScalarWhereWithAggregatesInput | RefeicaoScalarWhereWithAggregatesInput[]
    OR?: RefeicaoScalarWhereWithAggregatesInput[]
    NOT?: RefeicaoScalarWhereWithAggregatesInput | RefeicaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Refeicao"> | string
    nome?: StringWithAggregatesFilter<"Refeicao"> | string
    horario?: DateTimeWithAggregatesFilter<"Refeicao"> | Date | string
    calorias?: FloatWithAggregatesFilter<"Refeicao"> | number
    proteinas?: FloatWithAggregatesFilter<"Refeicao"> | number
    carboidratos?: FloatWithAggregatesFilter<"Refeicao"> | number
    gorduras?: FloatWithAggregatesFilter<"Refeicao"> | number
    usuarioId?: StringWithAggregatesFilter<"Refeicao"> | string
  }

  export type AlimentoRefeicaoWhereInput = {
    AND?: AlimentoRefeicaoWhereInput | AlimentoRefeicaoWhereInput[]
    OR?: AlimentoRefeicaoWhereInput[]
    NOT?: AlimentoRefeicaoWhereInput | AlimentoRefeicaoWhereInput[]
    id?: StringFilter<"AlimentoRefeicao"> | string
    nomeAlimento?: StringFilter<"AlimentoRefeicao"> | string
    quantidade?: FloatFilter<"AlimentoRefeicao"> | number
    calorias?: FloatFilter<"AlimentoRefeicao"> | number
    proteinas?: FloatFilter<"AlimentoRefeicao"> | number
    carboidratos?: FloatFilter<"AlimentoRefeicao"> | number
    gorduras?: FloatFilter<"AlimentoRefeicao"> | number
    codigoOpenFood?: StringNullableFilter<"AlimentoRefeicao"> | string | null
    refeicaoId?: StringFilter<"AlimentoRefeicao"> | string
    refeicao?: XOR<RefeicaoScalarRelationFilter, RefeicaoWhereInput>
  }

  export type AlimentoRefeicaoOrderByWithRelationInput = {
    id?: SortOrder
    nomeAlimento?: SortOrder
    quantidade?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    codigoOpenFood?: SortOrder
    refeicaoId?: SortOrder
    refeicao?: RefeicaoOrderByWithRelationInput
  }

  export type AlimentoRefeicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlimentoRefeicaoWhereInput | AlimentoRefeicaoWhereInput[]
    OR?: AlimentoRefeicaoWhereInput[]
    NOT?: AlimentoRefeicaoWhereInput | AlimentoRefeicaoWhereInput[]
    nomeAlimento?: StringFilter<"AlimentoRefeicao"> | string
    quantidade?: FloatFilter<"AlimentoRefeicao"> | number
    calorias?: FloatFilter<"AlimentoRefeicao"> | number
    proteinas?: FloatFilter<"AlimentoRefeicao"> | number
    carboidratos?: FloatFilter<"AlimentoRefeicao"> | number
    gorduras?: FloatFilter<"AlimentoRefeicao"> | number
    codigoOpenFood?: StringNullableFilter<"AlimentoRefeicao"> | string | null
    refeicaoId?: StringFilter<"AlimentoRefeicao"> | string
    refeicao?: XOR<RefeicaoScalarRelationFilter, RefeicaoWhereInput>
  }, "id">

  export type AlimentoRefeicaoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeAlimento?: SortOrder
    quantidade?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    codigoOpenFood?: SortOrder
    refeicaoId?: SortOrder
    _count?: AlimentoRefeicaoCountOrderByAggregateInput
    _avg?: AlimentoRefeicaoAvgOrderByAggregateInput
    _max?: AlimentoRefeicaoMaxOrderByAggregateInput
    _min?: AlimentoRefeicaoMinOrderByAggregateInput
    _sum?: AlimentoRefeicaoSumOrderByAggregateInput
  }

  export type AlimentoRefeicaoScalarWhereWithAggregatesInput = {
    AND?: AlimentoRefeicaoScalarWhereWithAggregatesInput | AlimentoRefeicaoScalarWhereWithAggregatesInput[]
    OR?: AlimentoRefeicaoScalarWhereWithAggregatesInput[]
    NOT?: AlimentoRefeicaoScalarWhereWithAggregatesInput | AlimentoRefeicaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlimentoRefeicao"> | string
    nomeAlimento?: StringWithAggregatesFilter<"AlimentoRefeicao"> | string
    quantidade?: FloatWithAggregatesFilter<"AlimentoRefeicao"> | number
    calorias?: FloatWithAggregatesFilter<"AlimentoRefeicao"> | number
    proteinas?: FloatWithAggregatesFilter<"AlimentoRefeicao"> | number
    carboidratos?: FloatWithAggregatesFilter<"AlimentoRefeicao"> | number
    gorduras?: FloatWithAggregatesFilter<"AlimentoRefeicao"> | number
    codigoOpenFood?: StringNullableWithAggregatesFilter<"AlimentoRefeicao"> | string | null
    refeicaoId?: StringWithAggregatesFilter<"AlimentoRefeicao"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    meta?: MetaCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaCreateNestedManyWithoutUsuarioInput
    refeicoes?: RefeicaoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    meta?: MetaUncheckedCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaUncheckedCreateNestedManyWithoutUsuarioInput
    refeicoes?: RefeicaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    meta?: MetaUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUpdateManyWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    meta?: MetaUncheckedUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUncheckedUpdateManyWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    dataNascimento: Date | string
    peso: number
    altura: number
    sexo: string
    objetivo: string
    nivelAtividade: string
    usuario: UserCreateNestedOneWithoutPerfilInput
  }

  export type PerfilUncheckedCreateInput = {
    id?: string
    nome: string
    sobrenome: string
    dataNascimento: Date | string
    peso: number
    altura: number
    sexo: string
    objetivo: string
    nivelAtividade: string
    usuarioId: string
  }

  export type PerfilUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    nivelAtividade?: StringFieldUpdateOperationsInput | string
    usuario?: UserUpdateOneRequiredWithoutPerfilNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    nivelAtividade?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilCreateManyInput = {
    id?: string
    nome: string
    sobrenome: string
    dataNascimento: Date | string
    peso: number
    altura: number
    sexo: string
    objetivo: string
    nivelAtividade: string
    usuarioId: string
  }

  export type PerfilUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    nivelAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    nivelAtividade?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MetaCreateInput = {
    id?: string
    calorias: number
    proteinas: number
    carboidratos: number
    agua: number
    gorduras: number
    dataCriacao: Date | string
    usuario: UserCreateNestedOneWithoutMetaInput
  }

  export type MetaUncheckedCreateInput = {
    id?: string
    calorias: number
    proteinas: number
    carboidratos: number
    agua: number
    gorduras: number
    dataCriacao: Date | string
    usuarioId: string
  }

  export type MetaUpdateInput = {
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    agua?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateInput = {
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    agua?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MetaCreateManyInput = {
    id?: string
    calorias: number
    proteinas: number
    carboidratos: number
    agua: number
    gorduras: number
    dataCriacao: Date | string
    usuarioId: string
  }

  export type MetaUpdateManyMutationInput = {
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    agua?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUncheckedUpdateManyInput = {
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    agua?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsumoAguaCreateInput = {
    id?: string
    quantidade: number
    data?: Date | string
    usuario: UserCreateNestedOneWithoutConsumoAguaInput
  }

  export type ConsumoAguaUncheckedCreateInput = {
    id?: string
    quantidade: number
    data?: Date | string
    usuarioId: string
  }

  export type ConsumoAguaUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutConsumoAguaNestedInput
  }

  export type ConsumoAguaUncheckedUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsumoAguaCreateManyInput = {
    id?: string
    quantidade: number
    data?: Date | string
    usuarioId: string
  }

  export type ConsumoAguaUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumoAguaUncheckedUpdateManyInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type RefeicaoCreateInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
    usuario: UserCreateNestedOneWithoutRefeicoesInput
    alimentos?: AlimentoRefeicaoCreateNestedManyWithoutRefeicaoInput
  }

  export type RefeicaoUncheckedCreateInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
    usuarioId: string
    alimentos?: AlimentoRefeicaoUncheckedCreateNestedManyWithoutRefeicaoInput
  }

  export type RefeicaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    usuario?: UserUpdateOneRequiredWithoutRefeicoesNestedInput
    alimentos?: AlimentoRefeicaoUpdateManyWithoutRefeicaoNestedInput
  }

  export type RefeicaoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    alimentos?: AlimentoRefeicaoUncheckedUpdateManyWithoutRefeicaoNestedInput
  }

  export type RefeicaoCreateManyInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
    usuarioId: string
  }

  export type RefeicaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
  }

  export type RefeicaoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type AlimentoRefeicaoCreateInput = {
    id?: string
    nomeAlimento: string
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood?: string | null
    refeicao: RefeicaoCreateNestedOneWithoutAlimentosInput
  }

  export type AlimentoRefeicaoUncheckedCreateInput = {
    id?: string
    nomeAlimento: string
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood?: string | null
    refeicaoId: string
  }

  export type AlimentoRefeicaoUpdateInput = {
    nomeAlimento?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    codigoOpenFood?: NullableStringFieldUpdateOperationsInput | string | null
    refeicao?: RefeicaoUpdateOneRequiredWithoutAlimentosNestedInput
  }

  export type AlimentoRefeicaoUncheckedUpdateInput = {
    nomeAlimento?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    codigoOpenFood?: NullableStringFieldUpdateOperationsInput | string | null
    refeicaoId?: StringFieldUpdateOperationsInput | string
  }

  export type AlimentoRefeicaoCreateManyInput = {
    id?: string
    nomeAlimento: string
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood?: string | null
    refeicaoId: string
  }

  export type AlimentoRefeicaoUpdateManyMutationInput = {
    nomeAlimento?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    codigoOpenFood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentoRefeicaoUncheckedUpdateManyInput = {
    nomeAlimento?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    codigoOpenFood?: NullableStringFieldUpdateOperationsInput | string | null
    refeicaoId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PerfilNullableScalarRelationFilter = {
    is?: PerfilWhereInput | null
    isNot?: PerfilWhereInput | null
  }

  export type MetaNullableScalarRelationFilter = {
    is?: MetaWhereInput | null
    isNot?: MetaWhereInput | null
  }

  export type ConsumoAguaListRelationFilter = {
    every?: ConsumoAguaWhereInput
    some?: ConsumoAguaWhereInput
    none?: ConsumoAguaWhereInput
  }

  export type RefeicaoListRelationFilter = {
    every?: RefeicaoWhereInput
    some?: RefeicaoWhereInput
    none?: RefeicaoWhereInput
  }

  export type ConsumoAguaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefeicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    sexo?: SortOrder
    objetivo?: SortOrder
    nivelAtividade?: SortOrder
    usuarioId?: SortOrder
  }

  export type PerfilAvgOrderByAggregateInput = {
    peso?: SortOrder
    altura?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    sexo?: SortOrder
    objetivo?: SortOrder
    nivelAtividade?: SortOrder
    usuarioId?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    sobrenome?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    altura?: SortOrder
    sexo?: SortOrder
    objetivo?: SortOrder
    nivelAtividade?: SortOrder
    usuarioId?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    peso?: SortOrder
    altura?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MetaCountOrderByAggregateInput = {
    id?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    agua?: SortOrder
    gorduras?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MetaAvgOrderByAggregateInput = {
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    agua?: SortOrder
    gorduras?: SortOrder
  }

  export type MetaMaxOrderByAggregateInput = {
    id?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    agua?: SortOrder
    gorduras?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MetaMinOrderByAggregateInput = {
    id?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    agua?: SortOrder
    gorduras?: SortOrder
    dataCriacao?: SortOrder
    usuarioId?: SortOrder
  }

  export type MetaSumOrderByAggregateInput = {
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    agua?: SortOrder
    gorduras?: SortOrder
  }

  export type ConsumoAguaCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type ConsumoAguaAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type ConsumoAguaMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type ConsumoAguaMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    data?: SortOrder
    usuarioId?: SortOrder
  }

  export type ConsumoAguaSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type AlimentoRefeicaoListRelationFilter = {
    every?: AlimentoRefeicaoWhereInput
    some?: AlimentoRefeicaoWhereInput
    none?: AlimentoRefeicaoWhereInput
  }

  export type AlimentoRefeicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefeicaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    usuarioId?: SortOrder
  }

  export type RefeicaoAvgOrderByAggregateInput = {
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
  }

  export type RefeicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    usuarioId?: SortOrder
  }

  export type RefeicaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    horario?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    usuarioId?: SortOrder
  }

  export type RefeicaoSumOrderByAggregateInput = {
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type RefeicaoScalarRelationFilter = {
    is?: RefeicaoWhereInput
    isNot?: RefeicaoWhereInput
  }

  export type AlimentoRefeicaoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeAlimento?: SortOrder
    quantidade?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    codigoOpenFood?: SortOrder
    refeicaoId?: SortOrder
  }

  export type AlimentoRefeicaoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
  }

  export type AlimentoRefeicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeAlimento?: SortOrder
    quantidade?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    codigoOpenFood?: SortOrder
    refeicaoId?: SortOrder
  }

  export type AlimentoRefeicaoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeAlimento?: SortOrder
    quantidade?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
    codigoOpenFood?: SortOrder
    refeicaoId?: SortOrder
  }

  export type AlimentoRefeicaoSumOrderByAggregateInput = {
    quantidade?: SortOrder
    calorias?: SortOrder
    proteinas?: SortOrder
    carboidratos?: SortOrder
    gorduras?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type PerfilCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    connect?: PerfilWhereUniqueInput
  }

  export type MetaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MetaCreateWithoutUsuarioInput, MetaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioInput
    connect?: MetaWhereUniqueInput
  }

  export type ConsumoAguaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConsumoAguaCreateWithoutUsuarioInput, ConsumoAguaUncheckedCreateWithoutUsuarioInput> | ConsumoAguaCreateWithoutUsuarioInput[] | ConsumoAguaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoAguaCreateOrConnectWithoutUsuarioInput | ConsumoAguaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ConsumoAguaCreateManyUsuarioInputEnvelope
    connect?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
  }

  export type RefeicaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RefeicaoCreateWithoutUsuarioInput, RefeicaoUncheckedCreateWithoutUsuarioInput> | RefeicaoCreateWithoutUsuarioInput[] | RefeicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefeicaoCreateOrConnectWithoutUsuarioInput | RefeicaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: RefeicaoCreateManyUsuarioInputEnvelope
    connect?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
  }

  export type PerfilUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    connect?: PerfilWhereUniqueInput
  }

  export type MetaUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MetaCreateWithoutUsuarioInput, MetaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioInput
    connect?: MetaWhereUniqueInput
  }

  export type ConsumoAguaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConsumoAguaCreateWithoutUsuarioInput, ConsumoAguaUncheckedCreateWithoutUsuarioInput> | ConsumoAguaCreateWithoutUsuarioInput[] | ConsumoAguaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoAguaCreateOrConnectWithoutUsuarioInput | ConsumoAguaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ConsumoAguaCreateManyUsuarioInputEnvelope
    connect?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
  }

  export type RefeicaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RefeicaoCreateWithoutUsuarioInput, RefeicaoUncheckedCreateWithoutUsuarioInput> | RefeicaoCreateWithoutUsuarioInput[] | RefeicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefeicaoCreateOrConnectWithoutUsuarioInput | RefeicaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: RefeicaoCreateManyUsuarioInputEnvelope
    connect?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PerfilUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    upsert?: PerfilUpsertWithoutUsuarioInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuarioInput, PerfilUpdateWithoutUsuarioInput>, PerfilUncheckedUpdateWithoutUsuarioInput>
  }

  export type MetaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MetaCreateWithoutUsuarioInput, MetaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioInput
    upsert?: MetaUpsertWithoutUsuarioInput
    disconnect?: MetaWhereInput | boolean
    delete?: MetaWhereInput | boolean
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutUsuarioInput, MetaUpdateWithoutUsuarioInput>, MetaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConsumoAguaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConsumoAguaCreateWithoutUsuarioInput, ConsumoAguaUncheckedCreateWithoutUsuarioInput> | ConsumoAguaCreateWithoutUsuarioInput[] | ConsumoAguaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoAguaCreateOrConnectWithoutUsuarioInput | ConsumoAguaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConsumoAguaUpsertWithWhereUniqueWithoutUsuarioInput | ConsumoAguaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ConsumoAguaCreateManyUsuarioInputEnvelope
    set?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    disconnect?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    delete?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    connect?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    update?: ConsumoAguaUpdateWithWhereUniqueWithoutUsuarioInput | ConsumoAguaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConsumoAguaUpdateManyWithWhereWithoutUsuarioInput | ConsumoAguaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConsumoAguaScalarWhereInput | ConsumoAguaScalarWhereInput[]
  }

  export type RefeicaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RefeicaoCreateWithoutUsuarioInput, RefeicaoUncheckedCreateWithoutUsuarioInput> | RefeicaoCreateWithoutUsuarioInput[] | RefeicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefeicaoCreateOrConnectWithoutUsuarioInput | RefeicaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: RefeicaoUpsertWithWhereUniqueWithoutUsuarioInput | RefeicaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RefeicaoCreateManyUsuarioInputEnvelope
    set?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    disconnect?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    delete?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    connect?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    update?: RefeicaoUpdateWithWhereUniqueWithoutUsuarioInput | RefeicaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RefeicaoUpdateManyWithWhereWithoutUsuarioInput | RefeicaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RefeicaoScalarWhereInput | RefeicaoScalarWhereInput[]
  }

  export type PerfilUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuarioInput
    upsert?: PerfilUpsertWithoutUsuarioInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuarioInput, PerfilUpdateWithoutUsuarioInput>, PerfilUncheckedUpdateWithoutUsuarioInput>
  }

  export type MetaUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MetaCreateWithoutUsuarioInput, MetaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioInput
    upsert?: MetaUpsertWithoutUsuarioInput
    disconnect?: MetaWhereInput | boolean
    delete?: MetaWhereInput | boolean
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutUsuarioInput, MetaUpdateWithoutUsuarioInput>, MetaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConsumoAguaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConsumoAguaCreateWithoutUsuarioInput, ConsumoAguaUncheckedCreateWithoutUsuarioInput> | ConsumoAguaCreateWithoutUsuarioInput[] | ConsumoAguaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsumoAguaCreateOrConnectWithoutUsuarioInput | ConsumoAguaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConsumoAguaUpsertWithWhereUniqueWithoutUsuarioInput | ConsumoAguaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ConsumoAguaCreateManyUsuarioInputEnvelope
    set?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    disconnect?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    delete?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    connect?: ConsumoAguaWhereUniqueInput | ConsumoAguaWhereUniqueInput[]
    update?: ConsumoAguaUpdateWithWhereUniqueWithoutUsuarioInput | ConsumoAguaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConsumoAguaUpdateManyWithWhereWithoutUsuarioInput | ConsumoAguaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConsumoAguaScalarWhereInput | ConsumoAguaScalarWhereInput[]
  }

  export type RefeicaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RefeicaoCreateWithoutUsuarioInput, RefeicaoUncheckedCreateWithoutUsuarioInput> | RefeicaoCreateWithoutUsuarioInput[] | RefeicaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefeicaoCreateOrConnectWithoutUsuarioInput | RefeicaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: RefeicaoUpsertWithWhereUniqueWithoutUsuarioInput | RefeicaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RefeicaoCreateManyUsuarioInputEnvelope
    set?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    disconnect?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    delete?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    connect?: RefeicaoWhereUniqueInput | RefeicaoWhereUniqueInput[]
    update?: RefeicaoUpdateWithWhereUniqueWithoutUsuarioInput | RefeicaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RefeicaoUpdateManyWithWhereWithoutUsuarioInput | RefeicaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RefeicaoScalarWhereInput | RefeicaoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPerfilInput = {
    create?: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerfilInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPerfilNestedInput = {
    create?: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerfilInput
    upsert?: UserUpsertWithoutPerfilInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPerfilInput, UserUpdateWithoutPerfilInput>, UserUncheckedUpdateWithoutPerfilInput>
  }

  export type UserCreateNestedOneWithoutMetaInput = {
    create?: XOR<UserCreateWithoutMetaInput, UserUncheckedCreateWithoutMetaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMetaNestedInput = {
    create?: XOR<UserCreateWithoutMetaInput, UserUncheckedCreateWithoutMetaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetaInput
    upsert?: UserUpsertWithoutMetaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMetaInput, UserUpdateWithoutMetaInput>, UserUncheckedUpdateWithoutMetaInput>
  }

  export type UserCreateNestedOneWithoutConsumoAguaInput = {
    create?: XOR<UserCreateWithoutConsumoAguaInput, UserUncheckedCreateWithoutConsumoAguaInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsumoAguaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConsumoAguaNestedInput = {
    create?: XOR<UserCreateWithoutConsumoAguaInput, UserUncheckedCreateWithoutConsumoAguaInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsumoAguaInput
    upsert?: UserUpsertWithoutConsumoAguaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsumoAguaInput, UserUpdateWithoutConsumoAguaInput>, UserUncheckedUpdateWithoutConsumoAguaInput>
  }

  export type UserCreateNestedOneWithoutRefeicoesInput = {
    create?: XOR<UserCreateWithoutRefeicoesInput, UserUncheckedCreateWithoutRefeicoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefeicoesInput
    connect?: UserWhereUniqueInput
  }

  export type AlimentoRefeicaoCreateNestedManyWithoutRefeicaoInput = {
    create?: XOR<AlimentoRefeicaoCreateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput> | AlimentoRefeicaoCreateWithoutRefeicaoInput[] | AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput[]
    connectOrCreate?: AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput | AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput[]
    createMany?: AlimentoRefeicaoCreateManyRefeicaoInputEnvelope
    connect?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
  }

  export type AlimentoRefeicaoUncheckedCreateNestedManyWithoutRefeicaoInput = {
    create?: XOR<AlimentoRefeicaoCreateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput> | AlimentoRefeicaoCreateWithoutRefeicaoInput[] | AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput[]
    connectOrCreate?: AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput | AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput[]
    createMany?: AlimentoRefeicaoCreateManyRefeicaoInputEnvelope
    connect?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRefeicoesNestedInput = {
    create?: XOR<UserCreateWithoutRefeicoesInput, UserUncheckedCreateWithoutRefeicoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefeicoesInput
    upsert?: UserUpsertWithoutRefeicoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefeicoesInput, UserUpdateWithoutRefeicoesInput>, UserUncheckedUpdateWithoutRefeicoesInput>
  }

  export type AlimentoRefeicaoUpdateManyWithoutRefeicaoNestedInput = {
    create?: XOR<AlimentoRefeicaoCreateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput> | AlimentoRefeicaoCreateWithoutRefeicaoInput[] | AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput[]
    connectOrCreate?: AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput | AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput[]
    upsert?: AlimentoRefeicaoUpsertWithWhereUniqueWithoutRefeicaoInput | AlimentoRefeicaoUpsertWithWhereUniqueWithoutRefeicaoInput[]
    createMany?: AlimentoRefeicaoCreateManyRefeicaoInputEnvelope
    set?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    disconnect?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    delete?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    connect?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    update?: AlimentoRefeicaoUpdateWithWhereUniqueWithoutRefeicaoInput | AlimentoRefeicaoUpdateWithWhereUniqueWithoutRefeicaoInput[]
    updateMany?: AlimentoRefeicaoUpdateManyWithWhereWithoutRefeicaoInput | AlimentoRefeicaoUpdateManyWithWhereWithoutRefeicaoInput[]
    deleteMany?: AlimentoRefeicaoScalarWhereInput | AlimentoRefeicaoScalarWhereInput[]
  }

  export type AlimentoRefeicaoUncheckedUpdateManyWithoutRefeicaoNestedInput = {
    create?: XOR<AlimentoRefeicaoCreateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput> | AlimentoRefeicaoCreateWithoutRefeicaoInput[] | AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput[]
    connectOrCreate?: AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput | AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput[]
    upsert?: AlimentoRefeicaoUpsertWithWhereUniqueWithoutRefeicaoInput | AlimentoRefeicaoUpsertWithWhereUniqueWithoutRefeicaoInput[]
    createMany?: AlimentoRefeicaoCreateManyRefeicaoInputEnvelope
    set?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    disconnect?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    delete?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    connect?: AlimentoRefeicaoWhereUniqueInput | AlimentoRefeicaoWhereUniqueInput[]
    update?: AlimentoRefeicaoUpdateWithWhereUniqueWithoutRefeicaoInput | AlimentoRefeicaoUpdateWithWhereUniqueWithoutRefeicaoInput[]
    updateMany?: AlimentoRefeicaoUpdateManyWithWhereWithoutRefeicaoInput | AlimentoRefeicaoUpdateManyWithWhereWithoutRefeicaoInput[]
    deleteMany?: AlimentoRefeicaoScalarWhereInput | AlimentoRefeicaoScalarWhereInput[]
  }

  export type RefeicaoCreateNestedOneWithoutAlimentosInput = {
    create?: XOR<RefeicaoCreateWithoutAlimentosInput, RefeicaoUncheckedCreateWithoutAlimentosInput>
    connectOrCreate?: RefeicaoCreateOrConnectWithoutAlimentosInput
    connect?: RefeicaoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type RefeicaoUpdateOneRequiredWithoutAlimentosNestedInput = {
    create?: XOR<RefeicaoCreateWithoutAlimentosInput, RefeicaoUncheckedCreateWithoutAlimentosInput>
    connectOrCreate?: RefeicaoCreateOrConnectWithoutAlimentosInput
    upsert?: RefeicaoUpsertWithoutAlimentosInput
    connect?: RefeicaoWhereUniqueInput
    update?: XOR<XOR<RefeicaoUpdateToOneWithWhereWithoutAlimentosInput, RefeicaoUpdateWithoutAlimentosInput>, RefeicaoUncheckedUpdateWithoutAlimentosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type PerfilCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    sobrenome: string
    dataNascimento: Date | string
    peso: number
    altura: number
    sexo: string
    objetivo: string
    nivelAtividade: string
  }

  export type PerfilUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    sobrenome: string
    dataNascimento: Date | string
    peso: number
    altura: number
    sexo: string
    objetivo: string
    nivelAtividade: string
  }

  export type PerfilCreateOrConnectWithoutUsuarioInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
  }

  export type MetaCreateWithoutUsuarioInput = {
    id?: string
    calorias: number
    proteinas: number
    carboidratos: number
    agua: number
    gorduras: number
    dataCriacao: Date | string
  }

  export type MetaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    calorias: number
    proteinas: number
    carboidratos: number
    agua: number
    gorduras: number
    dataCriacao: Date | string
  }

  export type MetaCreateOrConnectWithoutUsuarioInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutUsuarioInput, MetaUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsumoAguaCreateWithoutUsuarioInput = {
    id?: string
    quantidade: number
    data?: Date | string
  }

  export type ConsumoAguaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    quantidade: number
    data?: Date | string
  }

  export type ConsumoAguaCreateOrConnectWithoutUsuarioInput = {
    where: ConsumoAguaWhereUniqueInput
    create: XOR<ConsumoAguaCreateWithoutUsuarioInput, ConsumoAguaUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsumoAguaCreateManyUsuarioInputEnvelope = {
    data: ConsumoAguaCreateManyUsuarioInput | ConsumoAguaCreateManyUsuarioInput[]
  }

  export type RefeicaoCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
    alimentos?: AlimentoRefeicaoCreateNestedManyWithoutRefeicaoInput
  }

  export type RefeicaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
    alimentos?: AlimentoRefeicaoUncheckedCreateNestedManyWithoutRefeicaoInput
  }

  export type RefeicaoCreateOrConnectWithoutUsuarioInput = {
    where: RefeicaoWhereUniqueInput
    create: XOR<RefeicaoCreateWithoutUsuarioInput, RefeicaoUncheckedCreateWithoutUsuarioInput>
  }

  export type RefeicaoCreateManyUsuarioInputEnvelope = {
    data: RefeicaoCreateManyUsuarioInput | RefeicaoCreateManyUsuarioInput[]
  }

  export type PerfilUpsertWithoutUsuarioInput = {
    update: XOR<PerfilUpdateWithoutUsuarioInput, PerfilUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PerfilCreateWithoutUsuarioInput, PerfilUncheckedCreateWithoutUsuarioInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutUsuarioInput, PerfilUncheckedUpdateWithoutUsuarioInput>
  }

  export type PerfilUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    nivelAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    sobrenome?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    peso?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    nivelAtividade?: StringFieldUpdateOperationsInput | string
  }

  export type MetaUpsertWithoutUsuarioInput = {
    update: XOR<MetaUpdateWithoutUsuarioInput, MetaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MetaCreateWithoutUsuarioInput, MetaUncheckedCreateWithoutUsuarioInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutUsuarioInput, MetaUncheckedUpdateWithoutUsuarioInput>
  }

  export type MetaUpdateWithoutUsuarioInput = {
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    agua?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUncheckedUpdateWithoutUsuarioInput = {
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    agua?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumoAguaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ConsumoAguaWhereUniqueInput
    update: XOR<ConsumoAguaUpdateWithoutUsuarioInput, ConsumoAguaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ConsumoAguaCreateWithoutUsuarioInput, ConsumoAguaUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsumoAguaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ConsumoAguaWhereUniqueInput
    data: XOR<ConsumoAguaUpdateWithoutUsuarioInput, ConsumoAguaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConsumoAguaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ConsumoAguaScalarWhereInput
    data: XOR<ConsumoAguaUpdateManyMutationInput, ConsumoAguaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ConsumoAguaScalarWhereInput = {
    AND?: ConsumoAguaScalarWhereInput | ConsumoAguaScalarWhereInput[]
    OR?: ConsumoAguaScalarWhereInput[]
    NOT?: ConsumoAguaScalarWhereInput | ConsumoAguaScalarWhereInput[]
    id?: StringFilter<"ConsumoAgua"> | string
    quantidade?: FloatFilter<"ConsumoAgua"> | number
    data?: DateTimeFilter<"ConsumoAgua"> | Date | string
    usuarioId?: StringFilter<"ConsumoAgua"> | string
  }

  export type RefeicaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RefeicaoWhereUniqueInput
    update: XOR<RefeicaoUpdateWithoutUsuarioInput, RefeicaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RefeicaoCreateWithoutUsuarioInput, RefeicaoUncheckedCreateWithoutUsuarioInput>
  }

  export type RefeicaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RefeicaoWhereUniqueInput
    data: XOR<RefeicaoUpdateWithoutUsuarioInput, RefeicaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type RefeicaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: RefeicaoScalarWhereInput
    data: XOR<RefeicaoUpdateManyMutationInput, RefeicaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RefeicaoScalarWhereInput = {
    AND?: RefeicaoScalarWhereInput | RefeicaoScalarWhereInput[]
    OR?: RefeicaoScalarWhereInput[]
    NOT?: RefeicaoScalarWhereInput | RefeicaoScalarWhereInput[]
    id?: StringFilter<"Refeicao"> | string
    nome?: StringFilter<"Refeicao"> | string
    horario?: DateTimeFilter<"Refeicao"> | Date | string
    calorias?: FloatFilter<"Refeicao"> | number
    proteinas?: FloatFilter<"Refeicao"> | number
    carboidratos?: FloatFilter<"Refeicao"> | number
    gorduras?: FloatFilter<"Refeicao"> | number
    usuarioId?: StringFilter<"Refeicao"> | string
  }

  export type UserCreateWithoutPerfilInput = {
    id?: string
    email: string
    password: string
    meta?: MetaCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaCreateNestedManyWithoutUsuarioInput
    refeicoes?: RefeicaoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutPerfilInput = {
    id?: string
    email: string
    password: string
    meta?: MetaUncheckedCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaUncheckedCreateNestedManyWithoutUsuarioInput
    refeicoes?: RefeicaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutPerfilInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
  }

  export type UserUpsertWithoutPerfilInput = {
    update: XOR<UserUpdateWithoutPerfilInput, UserUncheckedUpdateWithoutPerfilInput>
    create: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPerfilInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPerfilInput, UserUncheckedUpdateWithoutPerfilInput>
  }

  export type UserUpdateWithoutPerfilInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    meta?: MetaUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUpdateManyWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutPerfilInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    meta?: MetaUncheckedUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUncheckedUpdateManyWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateWithoutMetaInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaCreateNestedManyWithoutUsuarioInput
    refeicoes?: RefeicaoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutMetaInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaUncheckedCreateNestedManyWithoutUsuarioInput
    refeicoes?: RefeicaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutMetaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMetaInput, UserUncheckedCreateWithoutMetaInput>
  }

  export type UserUpsertWithoutMetaInput = {
    update: XOR<UserUpdateWithoutMetaInput, UserUncheckedUpdateWithoutMetaInput>
    create: XOR<UserCreateWithoutMetaInput, UserUncheckedCreateWithoutMetaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMetaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMetaInput, UserUncheckedUpdateWithoutMetaInput>
  }

  export type UserUpdateWithoutMetaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUpdateManyWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutMetaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUncheckedUpdateManyWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateWithoutConsumoAguaInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    meta?: MetaCreateNestedOneWithoutUsuarioInput
    refeicoes?: RefeicaoCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutConsumoAguaInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    meta?: MetaUncheckedCreateNestedOneWithoutUsuarioInput
    refeicoes?: RefeicaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutConsumoAguaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsumoAguaInput, UserUncheckedCreateWithoutConsumoAguaInput>
  }

  export type UserUpsertWithoutConsumoAguaInput = {
    update: XOR<UserUpdateWithoutConsumoAguaInput, UserUncheckedUpdateWithoutConsumoAguaInput>
    create: XOR<UserCreateWithoutConsumoAguaInput, UserUncheckedCreateWithoutConsumoAguaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsumoAguaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsumoAguaInput, UserUncheckedUpdateWithoutConsumoAguaInput>
  }

  export type UserUpdateWithoutConsumoAguaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    meta?: MetaUpdateOneWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutConsumoAguaInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    meta?: MetaUncheckedUpdateOneWithoutUsuarioNestedInput
    refeicoes?: RefeicaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateWithoutRefeicoesInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUsuarioInput
    meta?: MetaCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutRefeicoesInput = {
    id?: string
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUsuarioInput
    meta?: MetaUncheckedCreateNestedOneWithoutUsuarioInput
    consumoAgua?: ConsumoAguaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutRefeicoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefeicoesInput, UserUncheckedCreateWithoutRefeicoesInput>
  }

  export type AlimentoRefeicaoCreateWithoutRefeicaoInput = {
    id?: string
    nomeAlimento: string
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood?: string | null
  }

  export type AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput = {
    id?: string
    nomeAlimento: string
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood?: string | null
  }

  export type AlimentoRefeicaoCreateOrConnectWithoutRefeicaoInput = {
    where: AlimentoRefeicaoWhereUniqueInput
    create: XOR<AlimentoRefeicaoCreateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput>
  }

  export type AlimentoRefeicaoCreateManyRefeicaoInputEnvelope = {
    data: AlimentoRefeicaoCreateManyRefeicaoInput | AlimentoRefeicaoCreateManyRefeicaoInput[]
  }

  export type UserUpsertWithoutRefeicoesInput = {
    update: XOR<UserUpdateWithoutRefeicoesInput, UserUncheckedUpdateWithoutRefeicoesInput>
    create: XOR<UserCreateWithoutRefeicoesInput, UserUncheckedCreateWithoutRefeicoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefeicoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefeicoesInput, UserUncheckedUpdateWithoutRefeicoesInput>
  }

  export type UserUpdateWithoutRefeicoesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUsuarioNestedInput
    meta?: MetaUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutRefeicoesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUsuarioNestedInput
    meta?: MetaUncheckedUpdateOneWithoutUsuarioNestedInput
    consumoAgua?: ConsumoAguaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AlimentoRefeicaoUpsertWithWhereUniqueWithoutRefeicaoInput = {
    where: AlimentoRefeicaoWhereUniqueInput
    update: XOR<AlimentoRefeicaoUpdateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedUpdateWithoutRefeicaoInput>
    create: XOR<AlimentoRefeicaoCreateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedCreateWithoutRefeicaoInput>
  }

  export type AlimentoRefeicaoUpdateWithWhereUniqueWithoutRefeicaoInput = {
    where: AlimentoRefeicaoWhereUniqueInput
    data: XOR<AlimentoRefeicaoUpdateWithoutRefeicaoInput, AlimentoRefeicaoUncheckedUpdateWithoutRefeicaoInput>
  }

  export type AlimentoRefeicaoUpdateManyWithWhereWithoutRefeicaoInput = {
    where: AlimentoRefeicaoScalarWhereInput
    data: XOR<AlimentoRefeicaoUpdateManyMutationInput, AlimentoRefeicaoUncheckedUpdateManyWithoutRefeicaoInput>
  }

  export type AlimentoRefeicaoScalarWhereInput = {
    AND?: AlimentoRefeicaoScalarWhereInput | AlimentoRefeicaoScalarWhereInput[]
    OR?: AlimentoRefeicaoScalarWhereInput[]
    NOT?: AlimentoRefeicaoScalarWhereInput | AlimentoRefeicaoScalarWhereInput[]
    id?: StringFilter<"AlimentoRefeicao"> | string
    nomeAlimento?: StringFilter<"AlimentoRefeicao"> | string
    quantidade?: FloatFilter<"AlimentoRefeicao"> | number
    calorias?: FloatFilter<"AlimentoRefeicao"> | number
    proteinas?: FloatFilter<"AlimentoRefeicao"> | number
    carboidratos?: FloatFilter<"AlimentoRefeicao"> | number
    gorduras?: FloatFilter<"AlimentoRefeicao"> | number
    codigoOpenFood?: StringNullableFilter<"AlimentoRefeicao"> | string | null
    refeicaoId?: StringFilter<"AlimentoRefeicao"> | string
  }

  export type RefeicaoCreateWithoutAlimentosInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
    usuario: UserCreateNestedOneWithoutRefeicoesInput
  }

  export type RefeicaoUncheckedCreateWithoutAlimentosInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
    usuarioId: string
  }

  export type RefeicaoCreateOrConnectWithoutAlimentosInput = {
    where: RefeicaoWhereUniqueInput
    create: XOR<RefeicaoCreateWithoutAlimentosInput, RefeicaoUncheckedCreateWithoutAlimentosInput>
  }

  export type RefeicaoUpsertWithoutAlimentosInput = {
    update: XOR<RefeicaoUpdateWithoutAlimentosInput, RefeicaoUncheckedUpdateWithoutAlimentosInput>
    create: XOR<RefeicaoCreateWithoutAlimentosInput, RefeicaoUncheckedCreateWithoutAlimentosInput>
    where?: RefeicaoWhereInput
  }

  export type RefeicaoUpdateToOneWithWhereWithoutAlimentosInput = {
    where?: RefeicaoWhereInput
    data: XOR<RefeicaoUpdateWithoutAlimentosInput, RefeicaoUncheckedUpdateWithoutAlimentosInput>
  }

  export type RefeicaoUpdateWithoutAlimentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    usuario?: UserUpdateOneRequiredWithoutRefeicoesNestedInput
  }

  export type RefeicaoUncheckedUpdateWithoutAlimentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type ConsumoAguaCreateManyUsuarioInput = {
    id?: string
    quantidade: number
    data?: Date | string
  }

  export type RefeicaoCreateManyUsuarioInput = {
    id?: string
    nome: string
    horario?: Date | string
    calorias?: number
    proteinas?: number
    carboidratos?: number
    gorduras?: number
  }

  export type ConsumoAguaUpdateWithoutUsuarioInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumoAguaUncheckedUpdateWithoutUsuarioInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumoAguaUncheckedUpdateManyWithoutUsuarioInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefeicaoUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    alimentos?: AlimentoRefeicaoUpdateManyWithoutRefeicaoNestedInput
  }

  export type RefeicaoUncheckedUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    alimentos?: AlimentoRefeicaoUncheckedUpdateManyWithoutRefeicaoNestedInput
  }

  export type RefeicaoUncheckedUpdateManyWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
  }

  export type AlimentoRefeicaoCreateManyRefeicaoInput = {
    id?: string
    nomeAlimento: string
    quantidade: number
    calorias: number
    proteinas: number
    carboidratos: number
    gorduras: number
    codigoOpenFood?: string | null
  }

  export type AlimentoRefeicaoUpdateWithoutRefeicaoInput = {
    nomeAlimento?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    codigoOpenFood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentoRefeicaoUncheckedUpdateWithoutRefeicaoInput = {
    nomeAlimento?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    codigoOpenFood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlimentoRefeicaoUncheckedUpdateManyWithoutRefeicaoInput = {
    nomeAlimento?: StringFieldUpdateOperationsInput | string
    quantidade?: FloatFieldUpdateOperationsInput | number
    calorias?: FloatFieldUpdateOperationsInput | number
    proteinas?: FloatFieldUpdateOperationsInput | number
    carboidratos?: FloatFieldUpdateOperationsInput | number
    gorduras?: FloatFieldUpdateOperationsInput | number
    codigoOpenFood?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}