import Stripe from 'stripe';


const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1OmGVUH5OSUGbSSVFRdNuprJ' },
                { shipping_rate: 'shr_1OmGWIH5OSUGbSSVw2QK5uk9' }
            ],
            allow_promotion_codes: true,     
            line_items: req.body.map((item) => {
                const img = item.image[0].asset._ref;
                let newImage = img.replace(
                  "image-",
                  "https://cdn.sanity.io/images/ahbc4h3t/production/"
                );

                switch (true) {
                  case img.includes("-jpg"):
                    newImage = newImage.replace("-jpg", ".jpg");
                    break;
                  case img.includes("-png"):
                    newImage = newImage.replace("-png", ".png");
                    break;
                  case img.includes("-webp"):
                    newImage = newImage.replace("-webp", ".webp");
                    break;
                  case img.includes("-jpeg"):
                    newImage = newImage.replace("-jpeg", ".jpeg");
                    break;
                  default:
                    newImage = img;
                    break;
                }

                return{
                    price_data:{
                        currency: 'eur',
                        product_data: {
                            name: item.name,
                            images: [newImage],
                        },
                        unit_amount: Math.ceil(item.price * 100),
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity
                }
            
            }),
            custom_fields:[{
              key: 'city',
              label: {
                type: 'custom', 
                custom: 'City',
              },
              type: 'text',
              optional: 'false',
              },
              {
                key: 'address',
                label: {
                  type: 'custom', 
                  custom: 'Address',
                },
                type: 'text',
                optional: 'false',
              },
              {
                key: 'zipcode',
                label: {
                  type: 'custom', 
                  custom: 'Zip-code',
                },
                type: 'text',
                optional: 'false',
              }
            ],

            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/`,
          }
      // Create Checkout Sessions from body params.

      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);



    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}