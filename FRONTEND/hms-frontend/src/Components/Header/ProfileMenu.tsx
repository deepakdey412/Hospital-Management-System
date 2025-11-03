import { Menu, Button, Text, Group, Avatar } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";

function ProfileMenu() {
  return (
    <Menu shadow="md" width={220}>
      <Menu.Target>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg text-neutral-900">
            Deepak
          </span>
          <Avatar variant="filled" src="avatar.png" size={45} alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>

        <Menu.Item>
          <Group gap="sm">
            <IconSettings size={16} />
            <Text>Settings</Text>
          </Group>
        </Menu.Item>

        <Menu.Item>
          <Group gap="sm">
            <IconMessageCircle size={16} />
            <Text>Messages</Text>
          </Group>
        </Menu.Item>

        <Menu.Item>
          <Group gap="sm">
            <IconPhoto size={16} />
            <Text>Gallery</Text>
          </Group>
        </Menu.Item>

        <Menu.Item>
          <Group gap="sm" justify="space-between">
            <Group gap="sm">
              <IconSearch size={16} />
              <Text>Search</Text>
            </Group>
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          </Group>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>

        <Menu.Item>
          <Group gap="sm">
            <IconArrowsLeftRight size={16} />
            <Text>Transfer my data</Text>
          </Group>
        </Menu.Item>

        <Menu.Item>
          <Group gap="sm">
            <IconTrash size={16} color="red" />
            <Text c="red">Delete my account</Text>
          </Group>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;
