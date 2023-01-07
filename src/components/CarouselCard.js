import {useDispatch, useSelector} from "react-redux";
import CarouseCardTitle from "./CarouseCardTitle";
import CarouselCardItem from "./CarouselCardItem";
import {addCardItemThunk} from '../store';

export default function CarouselCard({cardId}) {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.reducer.cards);

    const handleCardItemAdd = () => {
        dispatch(addCardItemThunk())
    }

    const renderedCardItems = state.data[cardId].cardItemsId.map((cardItemId) => (
        <CarouselCardItem key={cardItemId}
                          cardItemId={cardItemId}
                          onAdd={handleCardItemAdd}/>
    ));

    return (
        <div className="carousel-card">
            <CarouseCardTitle cardId={cardId}/>
            <ul className="w-full flex flex-col gap-2">{renderedCardItems}</ul>
        </div>
    );
}
