// a small interlude enums
// pretty handy for e.g. Http Error Codes
enum ErroCodes {
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  UnavailableForLegalReasons = 451,
}

console.log(ErroCodes);

// and of course for reponse codes

enum StatusCodes {
  OK = 200,
  Created,
  Accepted,
  NonAuthoritativeInformation,
  NoContent,
}
console.log(StatusCodes.OK);
console.log(StatusCodes.Created);
console.log(StatusCodes.Accepted);
console.log(StatusCodes[204]);
