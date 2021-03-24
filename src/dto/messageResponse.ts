export default class messageResponse {
  constructor(
    public message: string,
    public error: boolean,
    public data: any
  ) {}
}
