export interface Contacts {
  id: number,
  name: string,
  surname: string,
  email: string,
  password: string,
  category: number,
  phone: number,
  birthDate: string
}

export interface ContactsWithoutId extends Omit<Contacts, 'id'> { }
