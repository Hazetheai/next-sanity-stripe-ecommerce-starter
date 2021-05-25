import MyImage from "components/elements/Image";
import React from "react";

interface OrderedItemProps {
  item: {
    amount?: number;
    currency?: string;
    custom?: Record<string, any>;
    quantity?: number;
    type?: string;
  };
}

const OrderedItem: React.FC<OrderedItemProps> = ({ item }) => {
  return (
    <div className={`flex justify-between mt-6`}>
      <div className="flex">
        {!!item?.custom?.images.length && (
          <MyImage
            // alt={product.title}
            nextImageProps={{
              src: item?.custom?.images[0],
              alt: item?.custom?.name,
              layout: "fill",
              width: undefined,
              height: undefined,
              objectFit: "cover",
            }}
            containerClassName="h-20 w-20"
          />
        )}
        <div className="mx-3 flex items-center">
          <h3 className="text-sm text-white-600">{item?.custom?.name}</h3>
        </div>
      </div>
      <div className="flex items-center">
        {item.amount && (
          <span className="text-white-600">€{item.amount / 100}</span>
        )}
      </div>
    </div>
  );
};

export default OrderedItem;
