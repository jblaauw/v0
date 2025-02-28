export interface Review {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    reviewText: string;
    rating: string;
  };
}
