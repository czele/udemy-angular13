export class ConversaoResponse {

  constructor(
    public base: string,
    public date: string,
    public rates: any) {}
}

//JSON: {"base":"USD","date":"2022-10-25","rates":"`{"BRL":5.32}"}
