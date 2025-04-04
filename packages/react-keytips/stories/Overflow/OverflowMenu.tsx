import * as React from 'react';
import { MoreHorizontalRegular } from '@fluentui/react-icons';
import {
  Menu,
  ToolbarButton,
  MenuList,
  MenuPopover,
  MenuTrigger,
  useOverflowMenu,
  useMergedRefs,
  useIsOverflowItemVisible,
  MenuItem,
} from '@fluentui/react-components';
import {
  useKeytipRef,
  type KeytipProps,
} from '@fluentui-contrib/react-keytips';
import type { MenuItemType } from './shared.types';

const OverflowMenuItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{
    keytipProps: KeytipProps;
    overflowSequence: string[];
    id: string;
  }>
>(({ keytipProps, overflowSequence, id, children, ...props }, ref) => {
  const isVisible = useIsOverflowItemVisible(id);

  const keytipRef = useKeytipRef<HTMLDivElement>({
    ...keytipProps,
    keySequences: [...overflowSequence, ...keytipProps.keySequences.slice(-1)],
  });

  const mergedRefs = useMergedRefs(ref, keytipRef);

  if (isVisible) {
    return null;
  }

  return (
    <MenuItem id={id} ref={mergedRefs} {...props}>
      {children}
    </MenuItem>
  );
});

export const OverflowMenu = ({
  overflowMenuItems,
  overflowKeytipProps,
  overflowSequence,
}: {
  overflowMenuItems: MenuItemType[];
  overflowSequence: string[];
  overflowKeytipProps: KeytipProps;
}) => {
  const { ref, isOverflowing, overflowCount } =
    useOverflowMenu<HTMLButtonElement>();

  const keytipRef = useKeytipRef(overflowKeytipProps);

  const mergedRefs = useMergedRefs(ref, keytipRef);

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu hasIcons>
      <MenuTrigger disableButtonEnhancement>
        <ToolbarButton
          ref={mergedRefs}
          icon={<MoreHorizontalRegular />}
          aria-label={`${overflowCount} more tabs`}
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {overflowMenuItems.map(({ id, ...props }) => (
            <OverflowMenuItemWrapper
              key={id}
              id={id}
              {...props}
              overflowSequence={overflowSequence}
            >
              {props.name}
            </OverflowMenuItemWrapper>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
