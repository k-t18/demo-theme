import { useDroppable } from '@dnd-kit/core';

export default function Canvas(props: any) {
  const { setNodeRef } = useDroppable({
    id: 'components-droppable',
  });
  return (
    <div ref={setNodeRef}>
      {props?.components?.length > 0 &&
        props?.components?.map((prop: any) => {
          return (
            <div style={{ width: '580px' }}>
              <h3>{prop}</h3>
            </div>
          );
        })}
    </div>
  );
}
