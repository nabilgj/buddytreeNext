import { products } from '../../../data';

export default async (req, res) => {
  const httpMethod = req.method;
  const { brand, company, price, imgUrl } = req.body;

  switch (httpMethod) {
    case 'GET':
      res.status(200).json(products);
      break;

    case 'POST':
      // create a new job
      res.status(200).json({
        brand: brand,
        company: company,
        price: price,
        image: imgUrl,
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${httpMethod} not allowed`);
  }
};
