import React from "react";
import { Button } from "@material-ui/core";
import "../style/css/SearchPage.css";

import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>200+ stays</p>
        <h1>Stays nearby</h1>
        <div className="searchPage__infoFilters">
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of Place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms & Beds</Button>
          <Button variant="outlined">More filters</Button>
        </div>
        <SearchResult
          src={[
            "https://a0.muscache.com/im/pictures/ce6ba52c-855e-40b2-b686-e944a561c960.jpg?aki_policy=x_large",
            "https://a0.muscache.com/im/pictures/9423f86c-7c8b-45db-9e40-3f0a0b0e163b.jpg?aki_policy=x_large"
          ]}
          title="Beautiful guesthouse by Eric and Kriss"
          location="Saugatruck"
          description="2 guests • 1 bedroom • kitchen • 1 bathroom • Wifi • laundry • centralized AC/heater"
          price="$56 /night"
          total="$230"
          star="4.5"
        />
        <SearchResult
          src={[
            "https://a0.muscache.com/im/pictures/2aee0b97-b548-4e73-b145-81e9e8bba1b1.jpg?aki_policy=x_large",
            "https://a0.muscache.com/im/pictures/66cd90cc-47d7-4186-932c-965709bdc64d.jpg?aki_policy=x_large",
            "https://a0.muscache.com/im/pictures/45cb37f5-e763-4a15-8e51-f272ed6293d0.jpg?aki_policy=x_large"
          ]}
          title="Entire cottage by Lynda"
          location="fennyville"
          description="6 guests • 3 bedroom • kitchen • 2 bathroom • Wifi • laundry • centralized AC/heater"
          price="$189 /night"
          total="$550"
          star="4.0"
        />
        <SearchResult
          src={[
            "https://a0.muscache.com/im/pictures/0dc6976a-34fc-4116-80eb-dc78e32a22fa.jpg?aki_policy=xx_large",
            "https://a0.muscache.com/im/pictures/d645cf93-9877-404f-b8f2-97f9ffdb88a3.jpg?aki_policy=x_large",
            "https://a0.muscache.com/im/pictures/f5f20b12-bfe0-4080-b799-b1d05d961b80.jpg?aki_policy=xx_large"
          ]}
          title="Entire Guesthouse"
          location="holland"
          description="2 guests • 1 bedroom • kitchen • 1 bathroom • Wifi • laundry • centralized AC/heater"
          price="$57 /night"
          total="$280"
          star="4.8"
        />
        <SearchResult
          src={[
            "https://a0.muscache.com/im/pictures/31f6d123-8870-45ca-bf49-998b5d46793b.jpg?aki_policy=xx_large",
            "https://a0.muscache.com/im/pictures/eaabe48d-1545-4e6f-8f3a-e62c0e949fb2.jpg?aki_policy=x_large",
            "https://a0.muscache.com/im/pictures/47b958d6-bcab-4214-83a7-838860213f53.jpg?aki_policy=x_large"
          ]}
          title="Entire Cottage"
          location="Lake Ganeva"
          description="4 guests • 2 bedroom • kitchen • 1 bathroom • Wifi • laundry • centralized AC/heater"
          price="$145 /night"
          total="$590"
          star="4.0"
        />
      </div>
    </div>
  );
}

export default SearchPage;
