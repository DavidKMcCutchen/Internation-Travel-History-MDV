export interface Trip {
  id: string;
  title: string;
  dates: string;
  description: string;
};

export const emptyTrip = {
  id: '',
  title: '',
  dates: '',
  description: ''
};