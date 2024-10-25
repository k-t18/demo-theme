import { DndContext } from '@dnd-kit/core';
import DraggableComponents from './ComponentsSection';
import Canvas from './DesigingCanvas';
const ThemeDesignerMaster = () => {
  return (
    <div className="row">
      <DndContext>
        <div className="col-4 border border-primary">
          <DraggableComponents />
        </div>
        <div className="col-8 border border-danger">
          <Canvas />
        </div>
      </DndContext>
    </div>
  );
};

export default ThemeDesignerMaster;
