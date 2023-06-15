import React, { useState } from "react";
import { IonSearchbar, IonList, IonItem } from "@ionic/react";

interface SearchProps {
  data: string[];
}

const Search: React.FC<SearchProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: CustomEvent) => {
    setSearchTerm(e.detail.value);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <IonSearchbar
        value={searchTerm}
        onIonChange={handleSearchChange}
        placeholder="Search"
      />
      <IonList>
        {filteredData.map((item, index) => (
          <IonItem key={index}>
            <p>{item}</p>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default Search;
