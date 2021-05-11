package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.SlotStatus;
import com.exadel.recruitmentPlatform.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserTimeResponseDto extends BaseDto {

    @NotNull
    private LocalDateTime startDateTime;

    @NotNull
    private SlotStatus status;

    @NotBlank
    private String statusMessageKey;

    @NotNull
    private User user;
}
