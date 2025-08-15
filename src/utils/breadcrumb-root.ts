interface BGroup {
  id: string;
  itemCount: number;
}

export interface VisibilityControl {
  shouldCollapse: boolean;
}

type GroupsListener = (groups: BGroup['id'][]) => void;
type VisibilityListener = (visibilityControl: VisibilityControl) => void;

interface TBreadcrumbRoot {
  /**
   * BRoot should subscribe to groups change so it can render this:
   *
   * ```html
   * <div id="container-id-1" />
   * <div id="container-id-2" />
   * <div id="container-id-3" />
   * ```
   */
  subscribeToGroupsChange(listener: GroupsListener): void;
  unsubscribeToGroupsChange(listener: GroupsListener): void;

  /**
   * BGroups should subscribe to visibility change so it can render the
   * breadcrumbs component accordining:
   *
   * ```tsx
   * <Breadcrumbs shouldCollapse={shouldCollapse} />
   * ```
   */
  subscribeToVisibilityChange(
    id: BGroup['id'],
    listener: VisibilityListener,
  ): void;
  unsubscribeToVisibilityChange(id: BGroup['id']): void;

  /**
   * Create a new BGroup, the caller should choose a proper id to avoid
   * collision.
   */
  createGroup(id: BGroup['id']): void;
  removeGroup(id: BGroup['id']): void;

  /**
   * BGroups should call this method when its item count is changed, so
   * that the BRoot can recalculate the visibility config for each BGroup.
   */
  updateGroupItemCount(id: BGroup['id'], newItemCount: number): void;
}

export class BreadcrumbRoot implements TBreadcrumbRoot {
  private groupMap: Map<BGroup['id'], BGroup> = new Map();

  /**
   * Stores a list of group ids created by `this.createGroup(id)`
   */
  private groupIds: BGroup['id'][] = [];

  /**
   * Stores a set of listeners created by `subscribeToGroupsChange(listener)`
   */
  private groupsListeners: Set<GroupsListener> = new Set();

  /**
   * Stores a set of listeners created by `subscribeToVisibilityChange(id, listener)`
   */
  private visibilityListeners: Map<BGroup['id'], VisibilityListener> =
    new Map();

  // Just a way to do singleton
  private static instance: BreadcrumbRoot | null = null;
  public static getInstance(): BreadcrumbRoot {
    if (!BreadcrumbRoot.instance) {
      BreadcrumbRoot.instance = new BreadcrumbRoot();
    }
    return BreadcrumbRoot.instance;
  }

  private static groupFactory(id: BGroup['id']): BGroup {
    return {
      id,
      itemCount: 0,
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                              Groups Change API                             */
  /* -------------------------------------------------------------------------- */

  private notifyGroupsChange(): void {
    this.groupsListeners.forEach((listener) => listener(this.groupIds));
  }

  public subscribeToGroupsChange(listener: GroupsListener): void {
    this.groupsListeners.add(listener);
  }

  public unsubscribeToGroupsChange(listener: GroupsListener): void {
    this.groupsListeners.delete(listener);
  }

  public createGroup(id: BGroup['id']): void {
    if (!this.groupMap.has(id)) {
      this.groupMap.set(id, BreadcrumbRoot.groupFactory(id));
      this.groupIds.push(id);
      this.notifyGroupsChange();
    }
  }

  public removeGroup(id: BGroup['id']): void {
    if (this.groupMap.has(id)) {
      this.groupMap.delete(id);
      this.groupIds = this.groupIds.filter((groupId) => groupId !== id);
      this.notifyGroupsChange();
      this.notifyVisibilityChange();
    }
  }

  public updateGroupItemCount(id: BGroup['id'], newItemCount: number): void {
    const group = this.groupMap.get(id);
    if (group) {
      group.itemCount = newItemCount;
      this.notifyVisibilityChange();
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                           Visibility Change API                            */
  /* -------------------------------------------------------------------------- */
  private notifyVisibilityChange(): void {
    // TODO: implement it later
    console.log('unimplemented: control the visibility for each BGroup');
    for (const [key, value] of this.groupMap) {
      console.log(`group-${key} has ${value.itemCount} items`);
    }
  }

  public subscribeToVisibilityChange(
    id: BGroup['id'],
    listener: VisibilityListener,
  ): void {
    this.visibilityListeners.set(id, listener);
  }

  public unsubscribeToVisibilityChange(id: BGroup['id']): void {
    this.visibilityListeners.delete(id);
  }
}
