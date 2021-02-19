import { products } from '../../../data';

export default async (req, res) => {
  const httpMethod = req.method;
  const { brand, company, price, imgUrl } = req.body;

  const productId = req.query.id;
  const result = products.filter((prod) => prod.id === parseInt(productId));

  switch (httpMethod) {
    case 'GET':
      if (result.length > 0) {
        return res.status(200).json(result[0]);
      } else {
        res.status(404).json({ message: `Product with ${productId} not found.` });
      }
      break;

    case 'PUT':
      // update the products
      res.status(200).json({
        brand: brand,
        company: company,
        price: price,
        image: imgUrl,
      });
      break;

    case 'DELETE':
      // delete the product
      res.json(200).json(result[0]);
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
  }
};
