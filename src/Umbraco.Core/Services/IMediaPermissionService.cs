using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.Services.AuthorizationStatus;

namespace Umbraco.Cms.Core.Services;

/// <summary>
///     Manages permissions for media access.
/// </summary>
public interface IMediaPermissionService
{
    /// <summary>
    ///     Authorize that the current user has access to the specified media item.
    /// </summary>
    /// <param name="performingUser">The user performing the operation.</param>
    /// <param name="mediaKey">The identifier of the media item to check for access.</param>
    /// <returns>A task resolving into a <see cref="MediaAuthorizationStatus"/>.</returns>
    Task<MediaAuthorizationStatus> AuthorizeAccessAsync(IUser performingUser, Guid mediaKey)
        => AuthorizeAccessAsync(performingUser, new[] { mediaKey });

    /// <summary>
    ///     Authorize that the current user has access to these media items.
    /// </summary>
    /// <param name="performingUser">The user performing the operation.</param>
    /// <param name="mediaKeys">The identifiers of the media items to check for access.</param>
    /// <returns>A task resolving into a <see cref="MediaAuthorizationStatus"/>.</returns>
    Task<MediaAuthorizationStatus> AuthorizeAccessAsync(IUser performingUser, IEnumerable<Guid> mediaKeys);

    /// <summary>
    ///     Authorize that the current user has access to perform action on the media root item.
    /// </summary>
    /// <param name="performingUser">The user performing the operation.</param>
    /// <returns>A task resolving into a <see cref="MediaAuthorizationStatus"/>.</returns>
    Task<MediaAuthorizationStatus> AuthorizeRootAccessAsync(IUser performingUser);

    /// <summary>
    ///     Authorize that the current user has access to perform action on the media bin item.
    /// </summary>
    /// <param name="performingUser">The user performing the operation.</param>
    /// <returns>A task resolving into a <see cref="MediaAuthorizationStatus"/>.</returns>
    Task<MediaAuthorizationStatus> AuthorizeBinAccessAsync(IUser performingUser);
}
