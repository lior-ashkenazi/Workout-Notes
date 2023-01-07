import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import CarouseCardTitle from "./CarouseCardlTitle";
import CarouselCardItem from "./CarouselCardItem";
import {cardsActions} from "../store";

export default function CarouselCard({cardId}) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer.cards);

    const handleTitleSubmit = ({text, editable}) => {
        const updatedInfo = {text, editable};
        dispatch(cardsActions.updateCardTitle({id: cardId, info: updatedInfo}));
    };

    const renderedCardItems = state.data[cardId].cardItemsId.map((cardItemId) => (
        <CarouselCardItem key={cardItemId} cardItemId={cardItemId}/>
    ));

    return (
        <div className="carousel-card">
            <CarouseCardTitle
                currentTitle={state.data[cardId].title}
                onSubmit={handleTitleSubmit}
            />
            <ul className="w-full flex flex-col gap-2">{renderedCardItems}</ul>
        </div>
    );
}
