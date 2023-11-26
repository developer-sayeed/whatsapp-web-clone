import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  CommunityIcon,
  MenuIcon,
  NewChatIcon,
  StatusIcon,
} from "../assets/icons";

const iconData = [
  { icon: <CommunityIcon />, label: "Community chat" },
  { icon: <StatusIcon />, label: "Status" },
  { icon: <NewChatIcon />, label: "New Chat" },
];

function CustomTooltip({ label, icon, ...rest }) {
  return (
    <Tooltip
      shouldWrapChildren
      label={label}
      bg="#eae6df"
      color="black"
      fontSize="xs"
      {...rest}
    >
      <IconButton variant="ghost">{icon}</IconButton>
    </Tooltip>
  );
}

export function Header(props) {
  return (
    <Flex
      bg="#f0f2f5"
      justify="space-between"
      py="2"
      px="4"
      borderRight="1px solid #f2f2f2"
      color="#54656f"
      {...props}
    >
      <Avatar
        boxSize="40px"
        name="Clara Fiona"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwZmVtYWxlJTIwaGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <HStack spacing="3">
        {iconData.map((item, index) => (
          <CustomTooltip key={index} label={item.label} icon={item.icon} />
        ))}
      </HStack>
      <Menu>
        <Tooltip label="Menu" bg="#eae6df" color="black" fontSize="xs">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MenuIcon />}
            variant="outline"
            label="Menu"
          />
        </Tooltip>

        <MenuList>
          <MenuItem>New Group</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Advertise on Facebook</MenuItem>
          <MenuItem>Catlog</MenuItem>
          <MenuItem>Orders</MenuItem>
          <MenuItem>Quick Replies</MenuItem>
          <MenuItem>Starred Message</MenuItem>
          <MenuItem>Labels</MenuItem>
          <MenuItem>Setting</MenuItem>
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
