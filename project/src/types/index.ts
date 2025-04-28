export interface Material {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'ppt' | 'video' | 'link';
  url: string;
  dateAdded: string;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  materials: Material[];
}

export interface Level {
  id: number;
  name: string;
  description: string;
  modules: Module[];
}