export interface Vacancy{
  id:number,
  name:string,
  description:string,
  salary:number,
  company:Company,
  company_id:number,
}

export interface Vacancy2{
  id:number,
  name:string,
  description:string,
  salary:number,
  company:Company2
}

export interface Company{
  id:number,
  name:string,
  description:string,
  city:string,
  address:string,
  vacancies:Vacancy[]
}

export interface Company2{
  id:number,
  name:string,
  description:string,
  city:string,
  address:string,
}

export interface CompanyVacancies{
  vacs:any,
}

export class LoginResponse {
  token: string;
}





export const newsList:any[] = [
    {
        id: 1,
        title: '"Люди прямо плачут": Как казахстанцы штурмовали офисы "Гарант 24"',
        description: 'Сразу в нескольких городах Казахстана разразился громкий финансовый скандал. Вкладчики ломбарда "Гарант 24" не могут найти тех, кому отдали сотни тысяч тенге. Масштабы вложений поражают: люди, как выяснилось, даже продавали дома и все до копейки относили в контору, сообщает Tengrinews.kz со ссылкой на КТК.'
      },
      {
        id: 2,
        title: 'Сотни актюбинцев собрались около офиса ломбарда "Гарант 24"',
        description: 'В 12-м микрорайоне Актобе около офиса "Гарант 24 ломбард" собрались сотни жители, передает Tengrinews.kz со ссылкой на "Диапазон".'
      }
]