import React from 'react';
import Lists from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Todo } from '@/types/todo';

type Props = {
  onDone: (todo: Todo) => void;
  onDelete: (todos: Todo[]) => void;
  todos: Todo[];
};

export default function List({
  todos,
  onDone: handleIsDone,
  onDelete: handleDelete,
}: Props) {
  const [checked, setChecked] = React.useState<Todo[]>([]);

  const handleToggle = (value: Todo) => () => {
    const currentIndex = checked.findIndex(
      (selected) => selected.id === value.id
    );
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  React.useEffect(() => {
    if (checked) handleDelete(checked);
  }, [checked]);

  return (
    <Lists
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      {todos?.map((todo) => {
        const todoId = `todo-${todo.id}`;

        return (
          <ListItem
            key={todoId}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="checked"
                onClick={() => handleIsDone(todo)}
              >
                {todo.isDone ? (
                  <CheckCircleOutlinedIcon />
                ) : (
                  <CancelOutlinedIcon />
                )}
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
              <ListItemIcon sx={{ minWidth: 'auto!important' }}>
                <Checkbox
                  edge="start"
                  checked={
                    checked.findIndex((selected) => selected.id === todo.id) !==
                    -1
                  }
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': todoId }}
                />
              </ListItemIcon>
              <ListItemText id={todoId} primary={todo.item} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </Lists>
  );
}
