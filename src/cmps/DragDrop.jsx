import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';


const songsList = [
  {
    _id: '121321312',
    name: 'Gary Goodspeed',
  },
  {
    _id: '2213123213213dadsa',
    name: 'Little Cato',
  },
  {
    _id: '3dasadasdasxc213',
    name: 'KVN',
  },
  {
    _id: '4213sadsd',
    name: 'Mooncake',
  },
  {
    _id: '51231dsads',
    name: 'Quinn Ergon',
  }
]

export function DragDrop() {
  const [songs, setSongs] = useState(songsList);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(songs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSongs(items);
  }

  return (
    <div className="drag-drop-container">
      <h1>List Of Songs</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="song-container">
          {(provided) => (
            <ul className="songs-list" {...provided.droppableProps} ref={provided.innerRef}>
              <div className='labels-container flex space-between'>
                <span># Title</span>
                <span>Album</span>
                <span>Realese At</span>
                <span><i className="fas fa-clock"></i></span>
              </div>
              <hr />
              {songs.map(({ _id, name, imgUrl }, index) => {
                return (
                  <Draggable key={_id} draggableId={_id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className='drag-song-container flex'>
                          <div className='idx-img-title flex align-center'>
                            <small className='idx'>{index + 1}</small>
                            <small className='play-icon'><i className="fas fa-play"></i></small>
                            <div className='img-container'> {/* {imgUrl} */}</div>
                            <h3>{name}</h3>
                          </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}