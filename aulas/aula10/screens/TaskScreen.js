

import { View, FlatList } from "react-native";
import { Appbar, Modal, FAB } from "react-native-paper";
import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";

function TaskScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <View style={{ flex: 1, paddingBottom: 24 }}>
        <FlatList
          data={[]}
          keyExtractor={(item) => item.id}
          renderItem={TaskItem}
        />
      </View>
      <FAB
        style={{ position: "absolute", right: 16, bottom: 16 }}
        icon="plus"
        onPress={() => {}}
      />
      <Modal visible={false} transparent>
        <TaskModal />
      </Modal>
    </View>
  );
}

export default TaskScreen;