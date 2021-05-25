package com.exadel.recruitmentPlatform.dto;

import com.exadel.recruitmentPlatform.entity.SlotStatus;
import com.exadel.recruitmentPlatform.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserTimeResponseDto extends BaseDto {

    private LocalDateTime startDateTime;

    private SlotStatus status;

    private String statusMessageKey;

    private User user;
}
