export type Tune = {
  id: number;
  path: string;
  hash: string;
  title: string;
  artist: string;
};

export type Tunes = {
  tunes: Tune[];
};
