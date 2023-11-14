export class AxiosResponse {
  constructor(public status: number) {}
}

export class SuccessResponse<T> extends AxiosResponse {
  constructor(public response: T) {
    super(200);
  }
}

export class FailResponse extends AxiosResponse {
  constructor(public message: string) {
    super(500);
  }
}

export class ValidationErrorResponse extends AxiosResponse {
  constructor(public errors: object) {
    super(400);
  }
}
